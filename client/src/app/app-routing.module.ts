import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { HomeAdminComponent } from './home-admin/home-admin.component';
import { AddUserComponent } from './add-user/add-user.component';
import { AddPatientComponent } from './add-patient/add-patient.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { AddDiseaseComponent } from './add-disease/add-disease.component';
import { AddCureComponent } from './add-cure/add-cure.component';
import { CuresComponent } from './cures/cures.component';
import { DiseasesComponent } from './diseases/diseases.component';
import { SymptomsComponent } from './symptoms/symptoms.component';
import { ComponentsComponent } from './components/components.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { SearchPatientsComponent } from './search-patients/search-patients.component';
import { PatientDetailComponent } from './patient-detail/patient-detail.component';
import { SearchDiseasesComponent } from './search-diseases/search-diseases.component';
import { SearchSymptomsComponent } from './search-symptoms/search-symptoms.component';
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

const routes: Routes = [
  { 
    path: 'home', 
    component: HomeComponent,
    children: [
      {
        path: 'patients',
        component: PatientsComponent
      },
      {
        path: 'patients/add',
        component: AddPatientComponent
      },
      {
        path: 'password',
        component: ChangePasswordComponent
      },
      {
        path: 'patient/:id',
        component: PatientDetailComponent,
        children:[
          {
            path: 'detail',
            component: PatientComponent
          },
          {
            path: 'allergies',
            component: AllergiesComponent
          },
          {
            path: 'allergy/cure',
            component: AddAllergyComponent
          },
          {
            path: 'allergy/cure/loaded',
            component: AddAllergyComponent
          },
          {
            path: 'allergy/component',
            component: AddAllergyComponentComponent
          },
          {
            path: 'allergy/component/loaded',
            component: AddAllergyComponentComponent
          },
          {
            path: 'disease/search/loaded',
            component: SearchDiseasesComponent
          },
          {
            path: 'symptom/search/loaded',
            component: SearchSymptomsComponent
          },
          {
            path: 'disease/search',
            component: SearchDiseasesComponent
          },
          {
            path: 'symptom/search',
            component: SearchSymptomsComponent
          },
          {
            path: 'diagnosis/add/loaded',
            component: AddDiagnosisComponent
          },
          {
            path: 'diagnosis/add',
            component: AddDiagnosisComponent
          },
          {
            path: 'resoner/loaded',
            component: ResonerComponent
          },
          {
            path: 'resoner',
            component: ResonerComponent
          },
          {
            path: 'diagnosis/:id/therapy/loaded',
            component: AddTherapyComponent
          },
          {
            path: 'diagnosis/:id/therapy',
            component: AddTherapyComponent
          }

        ]
      },
      {
        path: 'patients/search',
        component: SearchPatientsComponent
      },
      {
        path: 'report1',
        component: Report1Component
      },
      {
        path: 'report2',
        component: Report2Component
      },
      {
        path: 'report3',
        component: Report3Component
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
        path:'disease/loaded',
        component: AddDiseaseComponent
      },
      {
        path:'disease',
        component: AddDiseaseComponent
      },
      {
        path: 'cure/loaded',
        component: AddCureComponent
      },
      {
        path: 'cure',
        component: AddCureComponent
      },
      {
        path: 'password',
        component: ChangePasswordComponent
      },
      {
        path: 'cures',
        component: CuresComponent
      },
      {
        path: 'diseases',
        component: DiseasesComponent
      },
      {
        path: 'symptoms',
        component: SymptomsComponent
      },
      {
        path: 'components',
        component: ComponentsComponent
      },
      {
        path: 'doctors',
        component: DoctorsComponent
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
  imports: [RouterModule.forRoot(routes, {useHash: true, onSameUrlNavigation: 'reload'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
