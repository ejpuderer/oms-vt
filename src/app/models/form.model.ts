import { BaseModel } from "./base.model";

export class Form extends BaseModel {

    public collectionName(): string {
        return 'Forms';
    }

    formName: string;
    formDesc: string;
    
}