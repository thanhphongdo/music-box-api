import { CloudFunctionBase } from '../../parse/index';
import { RequestRecently, RecentlyPlayed, ResponseListBase, RequestListRecently } from '../../model/index';
import { ParseQueryBase } from '../../parse';

export class LibraryFunction extends CloudFunctionBase {
	constructor() {
		super();
		this.defineCloud(this.saveRecentlyPlayed);
		this.defineCloud(this.listRecentlyPlayed);
	}

	@CloudFunctionBase.validateRequestAuth()
	@CloudFunctionBase.validateRequestParam(RequestRecently)
	async saveRecentlyPlayed(params: RequestRecently, request: Parse.Cloud.FunctionRequest) {
		const recentlyPlayed = new RecentlyPlayed();
		const user = request.user!;
		const query = await new ParseQueryBase(RecentlyPlayed);
		query.equalTo('itemId', params.id);
		query.equalTo('user', user)
		const result = await query.firstAsync<RecentlyPlayed>({ useMasterKey: true });

		if (result) {
			const user = request.user!;
			if (result.user.id === user.id) {
				result.set("playedAt", new Date())
				return await result.saveAsync<RecentlyPlayed>(null, { useMasterKey: true });
			} else {
				recentlyPlayed.itemId = params.id as any;
				recentlyPlayed.playedAt = new Date();
				recentlyPlayed.type = params.type as any;
				recentlyPlayed.detailInfo = params.detailInfo as any;
				recentlyPlayed.user = request.user as any;
				return await recentlyPlayed.saveAsync<RecentlyPlayed>(null, { useMasterKey: true });
			}
		} else {
			recentlyPlayed.itemId = params.id as any;
			recentlyPlayed.playedAt = new Date();
			recentlyPlayed.type = params.type as any;
			recentlyPlayed.detailInfo = params.detailInfo as any;
			recentlyPlayed.user = request.user as any;
			return await recentlyPlayed.saveAsync<RecentlyPlayed>(null, { useMasterKey: true });
		}
	}

	@CloudFunctionBase.validateRequestAuth()
	@CloudFunctionBase.validateRequestParam(RequestListRecently)
	async listRecentlyPlayed(params: RequestListRecently, request: Parse.Cloud.FunctionRequest) {
		let recentlyQuery = new ParseQueryBase(RecentlyPlayed);
		
		const startDay = new Date().setUTCHours(0,0,0,0);
		const today = new Date()
		const last30days = new Date().setDate(today.getDate()-30)
		const last7days = new Date().setDate(today.getDate()-7)
		const lastday = new Date().setDate(today.getDate()-1)

		recentlyQuery.limit(10000);
		recentlyQuery.equalTo('user', request.user)
		recentlyQuery.lessThanOrEqualTo('playedAt', today)

		let dataLast30days = await recentlyQuery.greaterThanOrEqualTo('playedAt',new Date(last30days)).findAsync<RecentlyPlayed>({ useMasterKey: true });
		let dataLast7days: Array<RecentlyPlayed> = [];
		let dataLastday: Array<RecentlyPlayed> = []
		let dataToday: Array<RecentlyPlayed> = [];

		dataLast30days.forEach(data => {
			if(data.playedAt > new Date(last7days)){
				dataLast7days.push(data)	
			}
			if(data.playedAt > new Date(lastday)) {
				dataLastday.push(data)
			}
			if(data.playedAt >= new Date(startDay)) {
				dataToday.push(data)
			}
		})
 
		let data = {
			"last30days": dataLast30days,
			"last7days": dataLast7days,
			"lastday": dataLastday,
			"today": dataToday
		}
		return data
	}
}

