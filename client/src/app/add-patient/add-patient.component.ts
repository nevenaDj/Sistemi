import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { PatientService } from './patient.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {

  patient: PatientInterface;

  constructor(private patientService: PatientService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
    this.patient = {
      id: null,
      firstName: '',
      lastName: '',
      doctor: null
    }
   }

  ngOnInit() {
  }

  save(){
    this.patientService.addPatient(this.patient)
      .then(res => this.router.navigate(['home/patients/search']))
      .catch(res => this.toastr.error('Prilikom upisa pacijenta došlo je do greške.'));
  }

}
