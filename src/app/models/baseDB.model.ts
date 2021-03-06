import { DBModel } from "./db.model";

export abstract class BaseDBModel implements DBModel {

    public abstract collectionName():string;

    public constructor(obj: any) {
        Object.assign(this, obj);
    }

    create<T>(type: (new () => T)): T {
        return new type();
    }

}