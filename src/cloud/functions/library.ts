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
	async saveRecentlyPlayed(params: RequestRecently, request: Parse.Cloud.FunctionRequest): Promise<any> {
		const recentlyPlayed = new RecentlyPlayed();
		const query = await new ParseQueryBase(RecentlyPlayed).equalTo('itemId', params.id).firstAsync<RecentlyPlayed>({ useMasterKey: true });
		if (query) {
			const user = request.user!;
			const q = await new ParseQueryBase(RecentlyPlayed).equalTo('user', user).firstAsync<RecentlyPlayed>({ useMasterKey: true });
			if (q) {
				query.set("playedAt", params.playedAt)
				return await query.saveAsync<RecentlyPlayed>(null, { useMasterKey: true });
			}
		}
		else {
			recentlyPlayed.itemId = params.id as any;
			recentlyPlayed.playedAt = params.playedAt as any;
			recentlyPlayed.type = params.type as any;
			recentlyPlayed.detailInfo = params.detailInfo as any;
			recentlyPlayed.user = request.user as any;
			return await recentlyPlayed.saveAsync<RecentlyPlayed>(null, { useMasterKey: true });
		}
	}

	@CloudFunctionBase.validateRequestAuth()
	@CloudFunctionBase.validateRequestParam(RequestListRecently)
	async listRecentlyPlayed(params: RequestListRecently, request: Parse.Cloud.FunctionRequest): Promise<ResponseListBase<RecentlyPlayed>> {
		let recentlyQuery = new ParseQueryBase(RecentlyPlayed);
		params.perPage = params.perPage || 10;
		params.page = params.page || 1;
		if (params.perPage > 10000) {
			throw new Parse.Error(400, 'Per Page limit 10000');
		}
		recentlyQuery.limit(params.perPage);
		recentlyQuery.skip(params.perPage * (params.page - 1));
		recentlyQuery.equalTo('user', request.user)
		let data = await recentlyQuery.findAsync<RecentlyPlayed>({ useMasterKey: true });

		return new ResponseListBase<RecentlyPlayed>(1, 10, 0, data);
	}
}


