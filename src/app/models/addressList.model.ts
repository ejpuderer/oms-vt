import { BaseDBModel } from "./baseDB.model";
import { Address } from "./address.model";

export class AddressList extends BaseDBModel {

    addressList: Address[];

    public collectionName(): string {
        return 'AddressList';
    }

    toJSON() {
        let jsonStr = [];
        for (let address of this.addressList) {
            jsonStr.push({address: { ...address }})
        }
        return jsonStr;
    }

}