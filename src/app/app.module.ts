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
import { HomePageComponent } from './components/shopping-list/components/home-page/home-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './components/shopping-list/components/login/login.component';
import { AdminPanelComponent } from './components/shopping-list/components/admin-panel/admin-panel.component';
import { AddProductComponent } from './components/shopping-list/components/add-product/add-product.component';
import { RegisterComponent } from './components/shopping-list/components/login/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingListComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    FilterComponent,
    CartComponent,
    HomePageComponent,
    LoginComponent,
    AdminPanelComponent,
    AddProductComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
