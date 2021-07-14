import { CloudFunctionBase } from '../../parse/index';
import { RequestUserSignUp, User } from '../../model/index';

export class UserFunction extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this._signUp);
    }

    @CloudFunctionBase.validateRequestParam(RequestUserSignUp)
    async _signUp(params: RequestUserSignUp, request: Parse.Cloud.FunctionRequest): Promise<User> {
        params.username = params.email;
        const user = new User(params);
        return await user.signUp(null, { useMasterKey: true });
    }

}