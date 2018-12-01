import { BaseDBModel } from "./baseDB.model";

export class ItemType extends BaseDBModel {

    //Metal, Plastic, etc. Most basic material type
    public collectionName(): string {
        return 'ItemTypes';
    }

    typeName: string;
    typeDesc: string;

}