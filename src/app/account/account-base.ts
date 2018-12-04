import { OnInit, Injectable } from "@angular/core";
import { AppService } from "../app.service";
import { BaseDBModel } from "../models/baseDB.model";

@Injectable()
export abstract class AccountBase<T extends BaseDBModel> implements OnInit {

    userDoc: T
    userId: string;

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.userId = this.appService.getCookieService().get('uid');
        this.appService.getDocFromDB<T>(this.getType(), this.userId).subscribe(
            (doc: T) => {
                if (doc) {
                    this.populateList(doc);
                }
            }
        )
    }

    abstract getType(): T;

    abstract populateList(doc: T);

    getAppService() {
        return this.appService;
    }

}