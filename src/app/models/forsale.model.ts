import { BaseModel } from "./base.model";

export class ForSale extends BaseModel {

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