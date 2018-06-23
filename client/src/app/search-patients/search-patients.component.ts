import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PatientService } from '../add-patient/patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search-patients',
  templateUrl: './search-patients.component.html',
  styleUrls: ['./search-patients.component.css']
})
export class SearchPatientsComponent implements OnInit {
  
  name: string;
  patients: PatientInterface[];

  constructor(private patientService: PatientService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
    this.patients = [];
    this.name = '';
  }

  ngOnInit() {
  }

  search(){
    if (this.name != ''){
      this.patientService.findPatients(this.name)
        .then(res => this.patients = res)
        .catch(res => {
          this.patients = [];
          this.toastr.info('Traženi pacijent nije pronađen.');
        })
    }
  }

  gotoPatientDetail(id : number){
    this.router.navigate([`/home/patient/${id}/detail`]);
  }



}
