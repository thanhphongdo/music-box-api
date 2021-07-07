import { BaseModel } from '../base_model';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class RequestSearch extends BaseModel {
    @IsNotEmpty()
    @IsString()
    term!: string;

    @IsNotEmpty()
    @IsNumber()
    limit!: number;

    @IsNotEmpty()
    @IsNumber()
    offset!: number;
}

export class RequestSearchByUser extends RequestSearch {
    @IsNotEmpty()
    @IsNumber()
    userId!: number;
}

export class RequestTrackById extends BaseModel {
    @IsNotEmpty()
    @IsNumber()
    id!: number;
}

export class RequestPlaylistById extends BaseModel {
    @IsNotEmpty()
    @IsNumber()
    id!: number;
}

export class RequestUserById extends BaseModel {
    @IsNotEmpty()
    @IsNumber()
    id!: number;
}