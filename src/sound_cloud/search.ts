import { BaseAxios } from '../utils/axios';
import { Config } from '../config/config';
import { PlayListInterface, SearchResultInterface, TrackInterface, UserInterface } from '../model';

const axios = new BaseAxios('https://api-v2.soundcloud.com');

function everything(term: string, limit: number, offset: number): Promise<SearchResultInterface> {
    return axios.get<any>(`/search?q=${term}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

function tracks(term: string, limit: number, offset: number): Promise<SearchResultInterface> {
    return axios.get<any>(`/search/tracks?q=${term}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

function trackById(id: number): Promise<TrackInterface> {
    return axios.get<any>(`/tracks/${id}?representation=full&client_id=${Config.soundCloudClienId}`).then(res => {
        return res.data;
    });
}

function playlists(term: string, limit: number, offset: number): Promise<SearchResultInterface> {
    return axios.get<any>(`/search/playlists_without_albums?q=${term}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

function playlistById(id: number): Promise<PlayListInterface> {
    return axios.get<any>(`/playlists/${id}?representation=full&client_id=${Config.soundCloudClienId}`).then(res => {
        return res.data;
    });
}

function albums(term: string, limit: number, offset: number): Promise<SearchResultInterface> {
    return axios.get<any>(`/search/albums?q=${term}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

function users(term: string, limit: number, offset: number): Promise<SearchResultInterface> {
    return axios.get<any>(`/search/users?q=${term}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

function userById(id: number): Promise<UserInterface> {
    return axios.get<any>(`/users/${id}?representation=full&client_id=${Config.soundCloudClienId}`).then(res => {
        return res.data;
    });
}

function tracksByUser(userId: number, term: string, limit: number, offset: number): Promise<SearchResultInterface> {
    return axios.get<any>(`/users/${userId}/tracks?q=${term}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

function playlistsByUser(userId: number, term: string, limit: number, offset: number): Promise<SearchResultInterface> {
    return axios.get<any>(`/users/${userId}/playlists_without_albums?q=${term}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

function albumsByUser(userId: number, term: string, limit: number, offset: number): Promise<SearchResultInterface> {
    return axios.get<any>(`/users/${userId}/albums?q=${term}&client_id=${Config.soundCloudClienId}&limit=${limit}&offset=${offset}`).then(res => {
        return res.data;
    });
}

export {
    everything,
    tracks,
    trackById,
    playlists,
    playlistById,
    albums,
    users,
    userById,
    tracksByUser,
    playlistsByUser,
    albumsByUser
}