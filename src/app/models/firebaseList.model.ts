import { BaseModel } from "./base.model";

export interface firebaseList<T extends BaseModel> {
    name: string
    data: T
}