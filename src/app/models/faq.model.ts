import { BaseDBModel } from "./baseDB.model";

export class FAQ extends BaseDBModel {

    public collectionName():string {
        return 'FAQ';
    }

    section: string;
    question: string;
    answer: string;

}