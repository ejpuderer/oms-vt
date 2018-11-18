import { BaseModel } from "../models/base.model";
import { AppService } from "../app.service";
import { Injectable, Input, OnInit } from "@angular/core";
import { firebaseList } from "../models/firebaseList.model";
import { AdminService } from "./admin.service";
import { BtnAction } from "../models/BtnAction.enum";

@Injectable()
export abstract class DBListBasecomponent<T extends BaseModel> implements OnInit {

    @Input('cmpIndex') cmpIndex:number;

    availableItems: firebaseList<T>[];
    selectedItem: firebaseList<T>;
    selectedItemIndex = -1;

    constructor(private appService: AppService, private adminService: AdminService) { }

    abstract getType():T  

    abstract onModelUpdate(data: any): T;

    ngOnInit() {
        this.clearItem();
        this.appService.getDocListFromDB<T>(this.getType()).subscribe(
            (doc) => {
                this.availableItems = [];
                this.clearItem();
                doc.forEach(
                    (model) => {
                        this.availableItems.push(
                            {
                                name: model.payload.doc.id,
                                data: this.onModelUpdate(model.payload.doc.data())
                            }
                        )
                    }
                );
            }
        );

        this.adminService.actionChangeSubscription.subscribe(
            (action) => {
                if (action.cmpIndex == this.cmpIndex) {
                    switch(action.action) {
                        case BtnAction.AddUpdate: {
                            this.addUpdateItem();
                            break;
                        }
                        case BtnAction.Remove: {
                            this.removeItem();
                            break;
                        }
                        case BtnAction.Clear: {
                            this.clearItem();
                            break;
                        }
                    }
                }
            }
        )
    }

    listChange(listIndex: number) {
        this.selectedItemIndex = listIndex;
        this.adminService.indexChangeSubscription.next({ cmpIndex: this.cmpIndex, itemIndex: listIndex});
    }

    addUpdateItem() {
        if (this.selectedItemIndex == -1) {
            this.appService.addDataToDatabase<T>(this.selectedItem.data).then();
        } else {
            this.appService.updateDatabase<T>(this.selectedItem.name, this.selectedItem.data).then();
        }
    }

    removeItem() {
        this.appService.removeFromDB(this.getType(), this.selectedItem.name);
        this.availableItems.splice(this.selectedItemIndex);
        this.clearItem();
    }

    clearItem() {
        this.selectedItemIndex = -1;
        this.selectedItem = {
            name: "",
            data: Object.create(this.getType())
        }
        this.adminService.indexChangeSubscription.next({ cmpIndex: this.cmpIndex, itemIndex: -1});
    }

}