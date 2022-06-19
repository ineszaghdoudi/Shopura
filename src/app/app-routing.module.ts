import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminProductsComponent } from './components/admin/admin-products/admin-products.component';
import { AdminUserComponent } from './components/admin/admin-user/admin-user.component';
import { AdminComponent } from './components/admin/admin.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { HomeComponent } from './components/home/home.component';
import { UserLoginComponent } from './components/user-login/user-login.component';
import { UserRegistrationComponent } from './components/user-registration/user-registration.component';

const routes: Routes = [

  {
    path:'',
    component: HomeComponent,
  },
  {
    path:'admin',
    component: AdminComponent
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'login',
    component: UserLoginComponent,
  },
  {
    path:'signup',
    component: UserRegistrationComponent,
  },
  {
    path:'forgot-password',
    component: ForgotPasswordComponent
  },
  {
    path:'admin-user',
    component: AdminUserComponent
  },
  {
    path:'admin-products',
    component: AdminProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
