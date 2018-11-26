import { BaseModel } from "./base.model";

export class ItemType extends BaseModel {

    //Metal, Plastic, etc. Most basic material type
    public collectionName(): string {
        return 'ItemTypes';
    }

    typeName: string;
    typeDesc: string;

}