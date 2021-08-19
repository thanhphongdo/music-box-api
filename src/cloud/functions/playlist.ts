import { CloudFunctionBase } from '../../parse/index';
import { RequestCreatePlaylist, PlayList, TrackInterface, ResponseListBase, RequestGetPlaylistById, RequestAddToPlaylist, RequestUpdatePlaylist, RequestListMyPlaylist } from '../../model/index';
import { ParseQueryBase } from '../../parse';

export class PlaylistFunction extends CloudFunctionBase {
	constructor() {
		super();
		this.defineCloud(this.savePlaylist);
		this.defineCloud(this.updatePlaylist);
		this.defineCloud(this.getMyPlaylist);
		this.defineCloud(this.getMyPlaylistById);
		this.defineCloud(this.addToPlaylist);
		this.defineCloud(this.deleteTrackInPlaylist);
	}

	@CloudFunctionBase.validateRequestAuth()
	@CloudFunctionBase.validateRequestParam(RequestCreatePlaylist)
	async savePlaylist(params: RequestCreatePlaylist, request: Parse.Cloud.FunctionRequest) {
		const playlist = new PlayList();

		let tracks: Array<TrackInterface> = [];
		playlist.title = params.title as any;
		playlist.description = params.description as any;
		playlist.duration = 0;
		playlist.tracks = tracks;
		playlist.user = request.user as any;
		return await playlist.saveAsync<PlayList>(null, { useMasterKey: true });
	}

	@CloudFunctionBase.validateRequestAuth()
	@CloudFunctionBase.validateRequestParam(RequestUpdatePlaylist)
	async updatePlaylist(params: RequestUpdatePlaylist, request: Parse.Cloud.FunctionRequest) {
		const user = request.user!;
		const query = await new ParseQueryBase(PlayList);
		query.equalTo('objectId', params.idPlaylist);
		query.equalTo('user', user)
		const result = await query.firstAsync<PlayList>({ useMasterKey: true });

		if (result) {
			const user = request.user!;
			if (result.user.id === user.id) {
				result.set('title', params.title);
				result.set('description', params.description);
				return await result.saveAsync<PlayList>(null, { useMasterKey: true });
			} else {
				return Promise.reject()
			}
		}
	}

	@CloudFunctionBase.validateRequestAuth()
	@CloudFunctionBase.validateRequestParam(RequestListMyPlaylist)
	async getMyPlaylist(params: RequestListMyPlaylist, request: Parse.Cloud.FunctionRequest): Promise<ResponseListBase<PlayList>> {
		const playlistQuery = new ParseQueryBase(PlayList);

		params.perPage = params.perPage || 30;
		params.page = params.page || 1;
		if (params.perPage > 10000) {
			throw new Parse.Error(400, 'Per Page limit 10000');
		}
		playlistQuery.limit(params.perPage);
		playlistQuery.skip(params.perPage * (params.page - 1));

		playlistQuery.equalTo('user', request.user)

		let data = await playlistQuery.findAsync<PlayList>({ useMasterKey: true });
		if (!data) throw this.throwObjectNotFound();

		return new ResponseListBase<PlayList>(1, 30, 0, data);
	}

	@CloudFunctionBase.validateRequestAuth()
	@CloudFunctionBase.validateRequestParam(RequestGetPlaylistById)
	async getMyPlaylistById(params: RequestGetPlaylistById, request: Parse.Cloud.FunctionRequest) {
		const playlistQuery = new ParseQueryBase(PlayList);

		playlistQuery.equalTo('objectId', params.id);
		playlistQuery.equalTo('user', request.user);

		let data = await playlistQuery.firstAsync<PlayList>({ useMasterKey: true });
		if (!data) throw this.throwObjectNotFound();

		return data
	}

	@CloudFunctionBase.validateRequestAuth()
	@CloudFunctionBase.validateRequestParam(RequestAddToPlaylist)
	async addToPlaylist(params: RequestAddToPlaylist, request: Parse.Cloud.FunctionRequest) {
		const playlistQuery = new ParseQueryBase(PlayList);

		playlistQuery.equalTo('objectId', params.playlistId);
		playlistQuery.equalTo('user', request.user)

		const result = await playlistQuery.firstAsync<PlayList>({ useMasterKey: true })
		if (result) {
			let isExist = false;
			result.tracks.forEach(track => {
				if (track.id === params.trackId) {
					isExist = true;
				}
			})
			if (!isExist) {
				result.tracks.push(params.track)
				result.duration += params.duration
				return await result.saveAsync<PlayList>(null, { useMasterKey: true });
			}
			return Promise.reject()
		}
	}

	@CloudFunctionBase.validateRequestAuth()
	async deleteTrackInPlaylist(params: any, request: Parse.Cloud.FunctionRequest) {
		const playlistQuery = new ParseQueryBase(PlayList);

		playlistQuery.equalTo('objectId', params.id);
		playlistQuery.equalTo('user', request.user)

		const result = await playlistQuery.firstAsync<PlayList>({ useMasterKey: true })
		if (result) {
			result.tracks.forEach(track => {
				if (track.id === params.trackId) {
					result.remove('tracks', track)
				}
			})
			return result.saveAsync<PlayList>(null, { useMasterKey: true })
		}
	}
}

