import { BaseModel } from '../base_model';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import {TrackInterface} from '../../model';

export class RequestCreatePlaylist extends BaseModel {
    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsNotEmpty()
    @IsString()
    description!: string;
}

export class RequestUpdatePlaylist extends BaseModel {
    @IsNotEmpty()
    idPlaylist!: string;

    @IsNotEmpty()
    @IsString()
    title!: string;

    @IsNotEmpty()
    @IsString()
    description!: string;
}

export class RequestGetPlaylistById extends BaseModel {
    @IsNotEmpty()
    id!: string;
}

export class RequestAddToPlaylist extends BaseModel {
    @IsNotEmpty()
    playlistId!: string;

    @IsNotEmpty()
    trackId!: string;
    
    @IsNotEmpty()
    duration!: number;

    @IsNotEmpty()
    track!: TrackInterface;
}
