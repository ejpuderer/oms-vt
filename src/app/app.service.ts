import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd } from '@angular/router';
import { AngularFirestore, DocumentChangeAction } from '@angular/fire/firestore';
import { Meta } from '@angular/platform-browser';
import { DBModel } from './models/db.model';
import { BaseDBModel } from './models/baseDB.model';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
  })
export class AppService {

    private fireBase = 'https://oms-vt.firebaseio.com/';
    cartItemCount: Subject<number> = new Subject();

    constructor(private cookieService: CookieService, private db: AngularFirestore,
        private meta: Meta, private http: HttpClient) { }

    public getLastRoute(): NavigationEnd {
        const val = <NavigationEnd> JSON.parse(this.cookieService.get('lastRoute'));
        if (val) {
            return val;
        }
        return null;
    }

    public getCookieService() {
        return this.cookieService;
    }

    public saveLastRoute(val: NavigationEnd) {
        this.cookieService.set( 'lastRoute', JSON.stringify(val) );
    }

    public setMetaOnInit(desc: string, keys: string) {
        this.meta.removeTag('description');
        this.meta.removeTag('keywords');
        this.meta.addTags([
            {name: 'description', content: desc},
            {name: 'keywords', content: keys}
        ]);
    }

    public addDataToDatabase<T extends BaseDBModel>(model: T) {
        return this.db.collection<T>(model.collectionName()).add({...<any>model});
    }

    public updateDatabase<T extends BaseDBModel>(id: string, model: T, data?: any) {
        if (!data) {
            data = JSON.stringify(model);
            return this.db.collection<T>(model.collectionName()).doc(id).set({data}, {merge: true});
        } else {
            return this.db.collection<T>(model.collectionName()).doc(id).set(data, {merge: true});
        }
    }

    public getDocListFromDB<T extends BaseDBModel>(model: T) {
        return this.db
            .collection<T>(model.collectionName())
            .snapshotChanges();
    }

    public docChangeActionToList<T extends BaseDBModel>(dca: DocumentChangeAction<T>[]) {
        const arr: T[] = [];
        dca.forEach(
          (model) => {               
              arr.push(model.payload.doc.data())          
          }
        );
        return arr;
    }

    public getDocFromDB<T extends BaseDBModel>(model: DBModel, docName: string) {
        return this.db.collection<T>(model.collectionName()).doc(docName).valueChanges();
    }

    public queryDocFromDB(model: DBModel, field: string, value: any) {
        return this.db
            .collection(model.collectionName(), ref => ref.where(field, '==', value))
            .get();
    }

    public removeFromDB(model: DBModel, id: string) {
        this.db.collection(model.collectionName()).doc(id).delete();
    }

    public makeJSON(obj: any) {
        return JSON.stringify(obj);
    }

    public postHttp(url: string, data: any) {
        return this.http.post(url, { data });
    }
}