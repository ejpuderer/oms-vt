import { Experience } from "./experience.model";
import { BaseModel } from "./base.model";

export class JobPosting extends BaseModel {

    public collectionName():string {
        return 'JobPostings';
    }

    positionName: string;
    salary: number;
    reqExperience: Experience[]
    howSoon: string;

}