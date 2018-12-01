import { BaseDBModel } from "./baseDB.model";

export class Blog extends BaseDBModel {
    
    public collectionName(): string {
        return "Blog"
    }

    blogDate: Date;
    title: string;
    author: string;
    contents: string;

}