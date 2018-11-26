import { BaseModel } from "./base.model";

export class SubType extends BaseModel {

    // Metal -> Aluminum, Steel etc
    public collectionName(): string {
        return 'SubType';
    }

    typeName: string;
    subTypeName: string;
    subTypeDesc: string;

}