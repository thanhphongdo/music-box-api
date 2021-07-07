import { CloudFunctionBase } from '../../parse/index';
import { RequestUserSignUp, User } from '../../model/index';

export class UserFunction extends CloudFunctionBase {
    constructor() {
        super();
        this.defineCloud(this._signUp);
    }

    @CloudFunctionBase.validateRequestParam(RequestUserSignUp)
    async _signUp(params: RequestUserSignUp, request: Parse.Cloud.FunctionRequest): Promise<User> {
        const user = new User({
            email: params.email,
            username: params.username,
            password: params.password,
            firstName: params.firstName,
            lastName: params.lastName,
        });
        return await user.signUp(null, { useMasterKey: true });
    }

}