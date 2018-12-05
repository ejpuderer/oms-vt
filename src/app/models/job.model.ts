import { BaseDBModel } from "./baseDB.model";

export class JobPosting extends BaseDBModel {

    public collectionName():string {
        return 'JobPostings';
    }

    title: string;
    salary: string;
    howSoon: string;
    description: String;
    datePosted: Date;
    employmentType: String;
    experienceRequirements: String[];
    educationRequirements: String;
    responsibilities: String[];

}