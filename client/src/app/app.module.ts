import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastModule, ToastOptions} from 'ng2-toastr/ng2-toastr';
import { DropdownModule } from 'ngx-dropdown';
import { Ng2OrderModule } from 'ng2-order-pipe';

import { AllergyService } from './add-allergy/allergy.service';
import { ReportService } from './report1/report.service';
import { PagerService } from './pager.service';
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
import { DiseasesComponent } from './diseases/diseases.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { ComponentsComponent } from './components/components.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SearchPatientsComponent } from './search-patients/search-patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { SearchSymptomsComponent } from './search-symptoms/search-symptoms.component';
import { SearchDiseasesComponent } from './search-diseases/search-diseases.component';
import { AddDiagnosisComponent } from './add-diagnosis/add-diagnosis.component';
import { PatientComponent } from './patient/patient.component';
import { ResonerComponent } from './resoner/resoner.component';
import { AddTherapyComponent } from './add-therapy/add-therapy.component';
import { Report1Component } from './report1/report1.component';
import { Report2Component } from './report2/report2.component';
import { Report3Component } from './report3/report3.component';
import { PatientsComponent } from './patients/patients.component';
import { AllergiesComponent } from './allergies/allergies.component';
import { AddAllergyComponent } from './add-allergy/add-allergy.component';
import { AddAllergyComponentComponent } from './add-allergy-component/add-allergy-component.component';


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
    CuresComponent,
    DiseasesComponent,
    SymptomsComponent,
    ComponentsComponent,
    DoctorsComponent,
    SearchPatientsComponent,
    PatientDetailComponent,
    SearchSymptomsComponent,
    SearchDiseasesComponent,
    AddDiagnosisComponent,
    PatientComponent,
    ResonerComponent,
    AddTherapyComponent,
    Report1Component,
    Report2Component,
    Report3Component,
    PatientsComponent,
    AllergiesComponent,
    AddAllergyComponent,
    AddAllergyComponentComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    DropdownModule,
    Ng2OrderModule,
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
    PagerService,
    ReportService,
    AllergyService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
