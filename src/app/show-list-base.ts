import { Injectable, OnInit } from "@angular/core";
import { BaseModel } from "./models/base.model";
import { AppService } from "./app.service";

@Injectable()
export abstract class ShowListBase<T extends BaseModel> implements OnInit {
    availableDocs: T[];

    abstract getType(): T;

    constructor(private appService: AppService) { }

    ngOnInit() {
        this.availableDocs = [];
        this.appService.getDocListFromDB<T>(this.getType()).subscribe(
            (doc) => {
                this.availableDocs = [];
                doc.forEach(
                    (model) => {
                        this.availableDocs.push(this.onModelUpdate(model.payload.doc.data()));
                    }
                )
                this.onListUpdate();
            }
        );
    }

    abstract onListUpdate();

    abstract onModelUpdate(data: any): T;

    getAppService() {
        return this.appService;
    }

    compareFields(fieldName: string, a: T, b: T): number {
		return this.compare(a[fieldName], b[fieldName]);
	}

	compare(a, b) {
		if (a === b) return 0;
		return (a < b ? -1 : 1);
    }

    getLocalImage(doc: T, imageName: string) {
        return 'assets/' + doc.collectionName() + '/' + imageName; 
    }

}