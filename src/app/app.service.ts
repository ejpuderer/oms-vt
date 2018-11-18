import { Injectable } from '@angular/core';
import { CookieService } from 'ngx-cookie-service';
import { NavigationEnd } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { Meta } from '@angular/platform-browser';
import { DBModel } from './models/db.model';
import { BaseModel } from './models/base.model';

@Injectable({
    providedIn: 'root'
  })
export class AppService {

    private fireBase = 'https://oms-vt.firebaseio.com/';

    constructor(private cookieService: CookieService, private db: AngularFirestore,
        private meta: Meta) { }

    public getLastRoute(): NavigationEnd {
        const val = <NavigationEnd> JSON.parse(this.cookieService.get('lastRoute'));
        if (val) {
            return val;
        }
        return null;
    }

    public saveLastRoute(val: NavigationEnd) {
        console.log('Last Route: ' + val.url);
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

    public addDataToDatabase<T extends BaseModel>(model: T) {
        return this.db.collection<T>(model.collectionName()).add({...<any>model});
    }

    public updateDatabase<T extends BaseModel>(id: string, model: T) {
        return this.db.collection<T>(model.collectionName()).doc(id).set({...<any>model}, {merge: true});
    }

    public getDocListFromDB<T extends BaseModel>(model: T) {
        return this.db
            .collection<T>(model.collectionName())
            .snapshotChanges();
    }

    public getDocFromDB<T extends BaseModel>(model: DBModel, docName: string) {
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
}