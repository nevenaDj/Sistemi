import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import { DropdownModule } from 'ngx-dropdown';

import { ComponentService } from './add-cure/component.service';
import { GroupeService } from './add-cure/groupe.service';
import { SymptomService } from './add-disease/symptom.service';
import { CureService } from './add-cure/cure.service';
import { DiseaseService } from './add-disease/disease.service';
import { PatientService } from './add-patient/patient.service';
import { UserService } from './add-user/user.service';
import { AuthService } from './login/auth.service';
import { TokenInterceptorService } from './token-interceptor.service';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { EqualValidator } from './change-password/equal-validator.directive';
import { AddDiseaseComponent } from './add-disease/add-disease.component';
import { AddCureComponent } from './add-cure/add-cure.component';
import { CuresComponent } from './cures/cures.component';


export class CustomOption extends ToastOptions {
  animate = 'flyRight'; // you can override any options available
  newestOnTop = false;
  showCloseButton = true;
}


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    HomeAdminComponent,
    AddUserComponent,
    AddPatientComponent,
    ChangePasswordComponent,
    EqualValidator,
    AddDiseaseComponent,
    AddCureComponent,
    CuresComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    ToastModule.forRoot(),
  ],
  providers: [
    AuthService,
    UserService,
    PatientService,
    DiseaseService,
    SymptomService,
    ComponentService,
    CureService,
    GroupeService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
