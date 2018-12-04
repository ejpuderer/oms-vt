import { Component } from '@angular/core';
import { AddressList } from 'src/app/models/addressList.model';
import { AccountBase } from '../account-base';
import { Address } from 'src/app/models/address.model';

@Component({
  selector: 'app-addessess',
  templateUrl: './addessess.component.html',
  styleUrls: ['./addessess.component.css']
})
export class AddessessComponent extends AccountBase<AddressList> {

  getType() {
    return AddressList.prototype;
  }

  ngOnInit() {
    this.userDoc = new AddressList(null);
    this.userDoc.addressList = <Address[]>[];
    super.ngOnInit();
  }

  populateList(doc) {
    const tmpListItems: Address[] = [];

    tmpListItems.push(new Address({}));
    for (let addr of doc.addressList) {
      tmpListItems.push(new Address(addr.address));
    }
    this.userDoc.addressList = tmpListItems;
  }

  addAddress() {
    this.getAppService().updateDatabase(this.userId.toString(), this.userDoc, { addressList: this.userDoc.toJSON() }).then(
      () => {
        this.userDoc.addressList.push(new Address(this.userDoc.addressList[0]))
        this.userDoc.addressList[0] = new Address(null);
      }
    );
  }

  updateAddress() {
    this.userDoc.addressList.splice(0, 1);
    this.getAppService().updateDatabase(this.userId.toString(), this.userDoc, { addressList: this.userDoc.toJSON() }).then();
  }

  deleteAddress(index: number) {
    this.userDoc.addressList.splice(index, 1);
    this.getAppService().updateDatabase(this.userId.toString(), this.userDoc, { addressList: this.userDoc.toJSON() }).then();
  }

  clearAddress(index: number) {
    this.userDoc.addressList[index] = new Address(null);
  }

}
