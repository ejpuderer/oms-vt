import { BaseModel } from "./base.model";

export class UserModel extends BaseModel {

    public collectionName():string {
        return 'users';
    }

    public email: string;
    public name: String;
    public company: String;
    public role: string;

}