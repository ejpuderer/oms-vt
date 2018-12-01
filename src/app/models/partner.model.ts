import { BaseDBModel } from "./baseDB.model";

export class Partner extends BaseDBModel {
    
    public collectionName(): string {
        return 'Partners';
    }

    companyName: String;
    why: String;
    logo: String;
    url: String;
    industry: String;

}