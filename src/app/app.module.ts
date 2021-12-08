import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { HeaderComponent } from './components/shopping-list/shared/header/header.component';
import { FooterComponent } from './components/shopping-list/shared/footer/footer.component';
import { NavComponent } from './components/shopping-list/shared/nav/nav.component';
import { FilterComponent } from './components/shopping-list/shared/filter/filter.component';
import { CartComponent } from './components/shopping-list/shared/cart/cart.component';
import { FormsModule } from '@angular/forms';
import { PhoneProductComponent } from './components/shopping-list/components/phone-product/phone-product.component';
import { TiviProductComponent } from './components/shopping-list/components/tivi-product/tivi-product.component';
import { LaptopProductComponent } from './components/shopping-list/components/laptop-product/laptop-product.component';
@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FilterComponent,
    CartComponent,
    PhoneProductComponent,
    TiviProductComponent,
    LaptopProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
