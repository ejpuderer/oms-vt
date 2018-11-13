import { DBModel } from "./db.model";

export abstract class BaseModel implements DBModel {

    public abstract collectionName();

    public constructor(obj: any) {
        Object.assign(this, obj);
        // Object.keys(this).forEach(
        //     key => {
        //         if (obj[key]) { this[key] = obj[key] }
        //     }
        // );
    }

}