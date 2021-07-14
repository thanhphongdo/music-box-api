import { CloudFunctionBase } from '../../parse/index';
import { RequestUserSignUp, User } from '../../model/index';
import {AuthDataInterface} from '../../model';
// const Google = require('googleapis');
const { google } = require('googleapis');
const oauth2Client = new google.auth.OAuth2(
    '437623285822-u8g8o0hp9osh84p56hdqohvqur2r3tp7.apps.googleusercontent.com',
    '9YEAmrqtuXuhAx2DPxgK782f',
    'http://localhost:4200/google-callback'
);
export class UserFunction extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this._signUp);
        this.defineCloud(this._googleLogin);
        this.defineCloud(this._googleAuthData);
    }

    @CloudFunctionBase.validateRequestParam(RequestUserSignUp)
    async _signUp(params: RequestUserSignUp, request: Parse.Cloud.FunctionRequest): Promise<User> {
        params.username = params.email;
        const user = new User(params);
        return await user.signUp(null, { useMasterKey: true });
    }

    async _googleLogin(params: any, request: Parse.Cloud.FunctionRequest): Promise<any> {
        const scopes: any = [
            'https://www.googleapis.com/auth/plus.me',
            'https://www.googleapis.com/auth/userinfo.email'
        ];

        const url = oauth2Client.generateAuthUrl({
            access_type: 'offline',
            scope: scopes
        });

        return {
            url
        }
    }

    private getGoogleToken(code: string): Promise<AuthDataInterface> {
        return new Promise((resolve, reject) => {
            oauth2Client.getToken(code, (err: any, token: any) => {
                if (err) {
                    reject(new Parse.Error(Parse.Error.INTERNAL_SERVER_ERROR, 'Cannot get google auth data'));
                    return;
                }
                oauth2Client.setCredentials({ access_token: token.access_token });
                var oauth2 = google.oauth2({
                    auth: oauth2Client,
                    version: "v2",
                });

                oauth2.userinfo.get(function (err: any, user: any) {
                    if (err) {
                        reject(new Parse.Error(Parse.Error.INTERNAL_SERVER_ERROR, 'Cannot get google auth data'));
                        return;
                    }
                    resolve({
                        email: user.data.email,
                        google: {
                            id: user.data.id,
                            id_token: token.id_token,
                            access_token: token.access_token,
                        },
                    });
                });
            });
        })
    }

    async _googleAuthData(params: { code: string }, request: Parse.Cloud.FunctionRequest): Promise<AuthDataInterface> {
        return await this.getGoogleToken(params.code);
    }

}