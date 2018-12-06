import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EcommerceComponent } from './ecommerce.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EcommerceService } from './ecommerce.service';
import { MoreInfoComponent } from './more-info/more-info.component';

const ecommerceRoutes: Routes = [
    {
        path: '',
        component: EcommerceComponent,
        children: [
            {
                path: 'shopping-cart',
                component: ShoppingCartComponent
            }           
        ]
    }
]

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(ecommerceRoutes)
    ],
    declarations: [
        EcommerceComponent,
        ShoppingCartComponent,
        MoreInfoComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
        EcommerceService
    ],
    entryComponents: [MoreInfoComponent]
})
export class EcommerceModule { }