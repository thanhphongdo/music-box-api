import { CloudFunctionBase } from '../../parse/index';
import {
    MixedSelectionsResultInterface,
    PlayListInterface,
    QueriesSuggessInterface,
    RequestHLS,
    RequestPlaylistById,
    RequestSearch,
    RequestSearchByUser,
    RequestTrackById,
    RequestUserById,
    TrackInterface,
    UserInterface,
    RequestSearchByTag
} from '../../model';
import { SearchResultInterface } from '../../model';
import * as SoundCloud from '../../sound_cloud/search';

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
        this.defineCloud(this._getHLS);
        this.defineCloud(this._getQueriesSuggess);
        this.defineCloud(this._mixedSelections);
        this.defineCloud(this._popularTrackByTag);
        this.defineCloud(this._playlistByTag);
        this.defineCloud(this._userByTag);
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchEverything(params: RequestSearch, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.everything(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchTracks(params: RequestSearch, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.tracks(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestTrackById)
    async _trackById(params: RequestTrackById, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.trackById(params.id).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchPlaylists(params: RequestSearch, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.playlists(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestPlaylistById)
    async _playlistById(params: RequestPlaylistById, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.playlistById(params.id).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchAlbums(params: RequestSearch, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.albums(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _searchUsers(params: RequestSearch, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.users(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestUserById)
    async _userById(params: RequestUserById, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.userById(params.id).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearchByUser)
    async _searchTracksByUsers(params: RequestSearchByUser, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.tracksByUser(params.userId, params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearchByUser)
    async _searchPlaylistsByUsers(params: RequestSearchByUser, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.playlistsByUser(params.userId, params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearchByUser)
    async _searchAlbumsByUsers(params: RequestSearchByUser, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.albumsByUser(params.userId, params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestHLS)
    async _getHLS(params: RequestHLS, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.getHLS(params.url).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearch)
    async _getQueriesSuggess(params: RequestSearch, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.queriesSuggess(params.term, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    async _mixedSelections(params: any, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.mixedSelections().then((data) => {
            const typeList = ['relax', 'party', 'study'];
            data.collection = data.collection.filter(item => {
                return typeList.some(type => {
                    return item.urn.indexOf(type) >= 0;
                });
            });
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearchByTag)
    async _popularTrackByTag(params: RequestSearchByTag, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.popularTrackByTag(params.tag, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearchByTag)
    async _playlistByTag(params: RequestSearchByTag, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.playlistByTag(params.tag, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

    @CloudFunctionBase.validateRequestParam(RequestSearchByTag)
    async _userByTag(params: RequestSearchByTag, request: Parse.Cloud.FunctionRequest) {
        const result = await SoundCloud.userByTag(params.tag, params.limit, params.offset).then((data) => {
            return data;
        }).catch(err => {
            return Promise.reject();
        });
        return result;
    }

}