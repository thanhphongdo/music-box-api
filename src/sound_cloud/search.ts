import { BaseAxios } from '../utils/axios';
import { Config } from '../config/config';
import {
    PlayListInterface,
    QueriesSuggessInterface,
    SearchResultInterface,
    TrackInterface,
    UserInterface,
    MixedSelectionsResultInterface
} from '../model';

const axios = new BaseAxios('https://api-v2.soundcloud.com');

export function everything(term: string, limit: number, offset: number): Promise<SearchResultInterface<TrackInterface | UserInterface | PlayListInterface>> {
    return axios.get<any>(`/search?q=${encodeURIComponent(term)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function tracks(term: string, limit: number, offset: number): Promise<SearchResultInterface<TrackInterface>> {
    return axios.get<any>(`/search/tracks?q=${encodeURIComponent(term)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function trackById(id: number): Promise<TrackInterface> {
    return axios.get<any>(`/tracks/${id}?representation=full&client_id=${Config.soundCloudClienId}`).then(res => {
        return res.data;
    });
}

export function playlists(term: string, limit: number, offset: number): Promise<SearchResultInterface<PlayListInterface>> {
    return axios.get<any>(`/search/playlists_without_albums?q=${encodeURIComponent(term)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function playlistById(id: number): Promise<PlayListInterface> {
    return axios.get<any>(`/playlists/${id}?representation=full&client_id=${Config.soundCloudClienId}`).then(res => {
        return res.data;
    });
}

export function albums(term: string, limit: number, offset: number): Promise<SearchResultInterface<PlayListInterface>> {
    return axios.get<any>(`/search/albums?q=${encodeURIComponent(term)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function users(term: string, limit: number, offset: number): Promise<SearchResultInterface<UserInterface>> {
    return axios.get<any>(`/search/users?q=${encodeURIComponent(term)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function userById(id: number): Promise<UserInterface> {
    return axios.get<any>(`/users/${id}?representation=full&client_id=${Config.soundCloudClienId}`).then(res => {
        return res.data;
    });
}

export function tracksByUser(userId: number, term: string, limit: number, offset: number): Promise<SearchResultInterface<TrackInterface>> {
    return axios.get<any>(`/users/${userId}/tracks?q=${encodeURIComponent(term)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function playlistsByUser(userId: number, term: string, limit: number, offset: number): Promise<SearchResultInterface<PlayListInterface>> {
    return axios.get<any>(`/users/${userId}/playlists_without_albums?q=${encodeURIComponent(term)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function albumsByUser(userId: number, term: string, limit: number, offset: number): Promise<SearchResultInterface<PlayListInterface>> {
    return axios.get<any>(`/users/${userId}/albums?q=${encodeURIComponent(term)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function getHLS(url: string): Promise<{ url: string }> {
    const hlsAxios = new BaseAxios();
    return hlsAxios.get<any>(`${url}?client_id=${Config.soundCloudClienId}`).then(res => {
        return res.data;
    });
}

export function queriesSuggess(term: string, limit: number, offset: number): Promise<QueriesSuggessInterface> {
    return axios.get<any>(`/search/queries?q=${encodeURIComponent(term)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function mixedSelections(): Promise<MixedSelectionsResultInterface> {
    return axios.get<any>(`/mixed-selections?client_id=${Config.soundCloudClienId}`).then(res => {
        return res.data;
    });
}

export function popularTrackByTag(tag: string, limit: number, offset: number): Promise<SearchResultInterface<TrackInterface>> {
    return axios.get<any>(`/search/tracks?q=&filter.genre_or_tag=${encodeURIComponent(tag)}&sort=popular&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function playlistByTag(tag: string, limit: number, offset: number): Promise<SearchResultInterface<PlayListInterface>> {
    return axios.get<any>(`/playlists/discovery?tag=${encodeURIComponent(tag)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export function userByTag(tag: string, limit: number, offset: number): Promise<SearchResultInterface<UserInterface>> {
    return axios.get<any>(`/search/users?q=${encodeURIComponent(tag)}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}
