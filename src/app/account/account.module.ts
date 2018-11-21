import { RouterModule, Routes } from '@angular/router';
import { NgModule } from "@angular/core";
import { SharedModule } from '../shared/shared.module';
import { AccountComponent } from './account.component';
import { WishListComponent } from './wish-list/wish-list.component';
import { HistoryComponent } from './history/history.component';
import { AddessessComponent } from './addessess/addessess.component';

const accountRoutes: Routes = [
    {
        path: '',
        component: AccountComponent,
        children: [
            {
                path: 'wish-list',
                component: WishListComponent
            },
            {
                path: 'history',
                component: HistoryComponent
            },
            {
                path: 'addresses',
                component: AddessessComponent
            }
        ]   
    }
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(accountRoutes)
    ],
    declarations: [
        AccountComponent,
        WishListComponent,
        HistoryComponent,
        AddessessComponent
    ],
    exports: [
        RouterModule
    ]
})
export class AccountModule { }