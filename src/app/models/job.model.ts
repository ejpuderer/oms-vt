import { Experience } from "./experience.model";
import { BaseDBModel } from "./baseDB.model";

export class JobPosting extends BaseDBModel {

    public collectionName():string {
        return 'JobPostings';
    }

    positionName: string;
    salary: number;
    reqExperience: Experience[]
    howSoon: string;
    detailsShort: string;
    detailsLong: string;

}