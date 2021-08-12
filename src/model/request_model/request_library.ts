import { BaseModel } from '../base_model';
import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { RequestListBase } from './request_list_base';

export class RequestRecently extends BaseModel {
    @IsNotEmpty()
    @IsString()
    id!: string;

    @IsNotEmpty()
    @IsNumber()
    type!: number;

    @IsNotEmpty()
    detailInfo!: {}
}

export class RequestListRecently extends RequestListBase {
   
}