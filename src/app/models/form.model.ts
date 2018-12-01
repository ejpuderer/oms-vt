import { BaseDBModel } from "./baseDB.model";

export class Form extends BaseDBModel {

    public collectionName(): string {
        return 'Forms';
    }

    formName: string;
    formDesc: string;
    
}