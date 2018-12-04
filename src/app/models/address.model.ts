import { BaseModel } from "./base.model";

export class Address extends BaseModel {
    consignee: String;
    building: String;
    phone: String;
    addrLine1: String;
    addrLine2: String;
    addrLine3: String;
    city: String;
    state: String;
    zip: String;
    addlInstr: String;
}