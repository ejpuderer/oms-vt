import { BaseDBModel } from "./baseDB.model";

export class TeamMember extends BaseDBModel {
    
    public collectionName(): string {
        return 'TeamMember';
    }

    firstName: String;
    lastName: String;
    imageUrl: String;
    background: String;

}