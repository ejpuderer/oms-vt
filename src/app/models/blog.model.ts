import { BaseModel } from "./base.model";

export class Blog extends BaseModel {
    
    public collectionName(): string {
        return "Blog"
    }

    blogDate: Date;
    title: string;
    author: string;
    contents: string;

}