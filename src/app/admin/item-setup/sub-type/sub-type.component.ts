import { AdminService } from './../../admin.service';
import { AppService } from 'src/app/app.service';
import { firebaseList } from './../../../models/firebaseList.model';
import { SubType } from './../../../models/subType.model';
import { Component } from '@angular/core';
import { DBListBasecomponent } from '../../DBListBaseComponent';
import { ItemType } from 'src/app/models/type.model';

@Component({
  selector: 'app-sub-type',
  templateUrl: './sub-type.component.html',
  styleUrls: ['./sub-type.component.css']
})
export class SubTypeComponent extends DBListBasecomponent<SubType> {

  availableTypes: firebaseList<ItemType>[];

  ngOnInit() {
    super.ngOnInit();
    this.getAppservice().getDocListFromDB<ItemType>(ItemType.prototype).subscribe(
      (doc) => {
        this.availableTypes = [];
        doc.forEach(
          (model) => {
            this.availableTypes.push(
              {
                name: model.payload.doc.id,
                data: new ItemType(model.payload.doc.data())
              }
            )
          }
        );
      }
    );
  }

  getType() {
    return SubType.prototype;
  }
  
  onModelUpdate(data: any) {
    return new SubType(data);
  }

}
