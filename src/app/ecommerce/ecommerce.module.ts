import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { EcommerceComponent } from './ecommerce.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { EcommerceService } from './ecommerce.service';

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
        ShoppingCartComponent
    ],
    exports: [
        RouterModule
    ],
    providers: [
        EcommerceService
    ]
})
export class EcommerceModule { }