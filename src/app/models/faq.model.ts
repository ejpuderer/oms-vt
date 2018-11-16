import { BaseModel } from "./base.model";

export class FAQ extends BaseModel {

    public collectionName():string {
        return 'FAQ';
    }

    section: string;
    question: string;
    answer: string;

}