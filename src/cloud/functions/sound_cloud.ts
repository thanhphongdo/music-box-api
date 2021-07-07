import { CloudFunctionBase } from '../../parse/index';
import { PlayListInterface, RequestPlaylistById, RequestSearch, RequestSearchByUser, RequestTrackById, RequestUserById, TrackInterface, UserInterface } from '../../model';
import { SearchResultInterface } from '../../model';
import { everything, playlists, albums, users, tracks, tracksByUser, playlistsByUser, albumsByUser, playlistById, userById, trackById } from '../../sound_cloud/search';

export class SoundCloudFunction extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this._searchEverything);
        this.defineCloud(this._searchTracks);
        this.defineCloud(this._trackById);
        this.defineCloud(this._searchPlaylists);
        this.defineCloud(this._searchAlbums);
        this.defineCloud(this._searchUsers);
        this.defineCloud(this._userById);
        this.defineCloud(this._searchTracksByUsers);
        this.defineCloud(this._searchPlaylistsByUsers);
        this.defineCloud(this._searchAlbumsByUsers);
        this.defineCloud(this._playlistById);
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchEverything(params: RequestSearch, request: Parse.Cloud.FunctionRequest): Promise<SearchResultInterface> {
        const result = await everything(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchTracks(params: RequestSearch, request: Parse.Cloud.FunctionRequest): Promise<SearchResultInterface> {
        const result = await tracks(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestTrackById)
    async _trackById(params: RequestTrackById, request: Parse.Cloud.FunctionRequest): Promise<TrackInterface> {
        const result = await trackById(params.id).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchPlaylists(params: RequestSearch, request: Parse.Cloud.FunctionRequest): Promise<SearchResultInterface> {
        const result = await playlists(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestPlaylistById)
    async _playlistById(params: RequestPlaylistById, request: Parse.Cloud.FunctionRequest): Promise<PlayListInterface> {
        const result = await playlistById(params.id).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchAlbums(params: RequestSearch, request: Parse.Cloud.FunctionRequest): Promise<SearchResultInterface> {
        const result = await albums(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchUsers(params: RequestSearch, request: Parse.Cloud.FunctionRequest): Promise<SearchResultInterface> {
        const result = await users(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestUserById)
    async _userById(params: RequestUserById, request: Parse.Cloud.FunctionRequest): Promise<UserInterface> {
        const result = await userById(params.id).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearchByUser)
    async _searchTracksByUsers(params: RequestSearchByUser, request: Parse.Cloud.FunctionRequest): Promise<SearchResultInterface> {
        const result = await tracksByUser(params.userId, params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearchByUser)
    async _searchPlaylistsByUsers(params: RequestSearchByUser, request: Parse.Cloud.FunctionRequest): Promise<SearchResultInterface> {
        const result = await playlistsByUser(params.userId, params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearchByUser)
    async _searchAlbumsByUsers(params: RequestSearchByUser, request: Parse.Cloud.FunctionRequest): Promise<SearchResultInterface> {
        const result = await albumsByUser(params.userId, params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

}