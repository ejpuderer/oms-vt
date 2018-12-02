import { ImageDBModel } from "./imageDB.model";

export class Partner extends ImageDBModel {
    
    public collectionName(): string {
        return 'Partners';
    }

    companyName: String;
    why: String;
    logo: String;
    url: String;
    industry: String;

}