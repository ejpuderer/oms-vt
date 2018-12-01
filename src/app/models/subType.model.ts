import { BaseDBModel } from "./baseDB.model";

export class SubType extends BaseDBModel {

    // Metal -> Aluminum, Steel etc
    public collectionName(): string {
        return 'SubType';
    }

    typeName: string;
    subTypeName: string;
    subTypeDesc: string;

}