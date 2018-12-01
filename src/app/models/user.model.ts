import { BaseDBModel } from "./baseDB.model";

export class UserModel extends BaseDBModel {

    public collectionName():string {
        return 'users';
    }

    public email: string;
    public name: String;
    public company: String;
    public role: string;

}