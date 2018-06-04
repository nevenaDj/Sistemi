import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ChangePasswordComponent } from './change-password/change-password.component';

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      {
        path: 'patient',
        component: AddPatientComponent
      },
      {
        path: 'password',
        component: ChangePasswordComponent
      }
    ]
  }, 
  { 
    path: 'admin', 
    component: HomeAdminComponent,
    children: [
      {
        path: 'user',
        component: AddUserComponent
    
      },
      {
        path: 'password',
        component: ChangePasswordComponent

      }
    ]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
