import { ImageDBModel } from "./imageDB.model";

export class TeamMember extends ImageDBModel {
    
    public collectionName(): string {
        return 'TeamMember';
    }

    firstName: String;
    lastName: String;
    imageUrl: String;
    background: String;

}