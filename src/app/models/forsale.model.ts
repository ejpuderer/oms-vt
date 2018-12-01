import { BaseDBModel } from "./baseDB.model";

export class ForSale extends BaseDBModel {

    public collectionName(): string {
        return 'ForSale';
    }

    type: string;
    subtype: string;
    form: string;
    name: string;
    desc: string;
    price: number;
    imageRef: string;
    
}