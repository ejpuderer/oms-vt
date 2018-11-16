import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';
import { BtnAction } from "../models/BtnAction.enum";

export interface cmpIndexAction {
    cmpIndex: number,
    action: BtnAction
}

export interface cmpIndexChange {
    cmpIndex: number,
    itemIndex: number
}

@Injectable()
export class AdminService {

    actionChangeSubscription = new Subject<cmpIndexAction>();
    indexChangeSubscription = new Subject<cmpIndexChange>();

}