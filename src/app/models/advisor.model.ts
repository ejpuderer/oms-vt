import { BaseDBModel } from "./baseDB.model";

export class Advisor extends BaseDBModel {
    
    public collectionName(): string {
        return "Advisor"
    }

    advisorName: string
    title: string;
    company: string;
    background: string;
    //use for external link. If null will default to assets folder/advisors/{{ name }}
    image: string

}