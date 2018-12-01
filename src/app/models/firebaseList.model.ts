import { BaseDBModel } from "./baseDB.model";

export interface firebaseList<T extends BaseDBModel> {
    name: string
    data: T
}