import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanelComponent } from './components/shopping-list/components/admin-panel/admin-panel.component';
import { HomePageComponent } from './components/shopping-list/components/home-page/home-page.component';
import { LoginComponent } from './components/shopping-list/components/login/login.component';
import { RegisterComponent } from './components/shopping-list/components/login/register/register.component';


const routes: Routes = [
  {
    path:'',
    redirectTo:"/home",
    pathMatch:"full"
  },
  {
    path:'home',
    component:HomePageComponent
  },
  {
    path:'login',
    component:LoginComponent
  },{
    path:'admin',
    component: AdminPanelComponent
  },{
    path:'register',
    component: RegisterComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
