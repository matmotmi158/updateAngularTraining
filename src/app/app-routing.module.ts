import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LaptopProductComponent } from './components/shopping-list/components/laptop-product/laptop-product.component';
import { PhoneProductComponent } from './components/shopping-list/components/phone-product/phone-product.component';
import { TiviProductComponent } from './components/shopping-list/components/tivi-product/tivi-product.component';
import { CartComponent } from './components/shopping-list/shared/cart/cart.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';

const routes: Routes = [
  {
    path:'home',
    component:ShoppingListComponent
  },
  {
    path:"cart",
    component:CartComponent
  },{
    path:"phone",
    component:PhoneProductComponent
  },{
    path:"laptop",
    component:LaptopProductComponent
  },{
    path:"tivi",
    component:TiviProductComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
