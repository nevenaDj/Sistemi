import { Component, OnInit } from '@angular/core';
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
              private router: Router) {
    this.patient = {
      id: null,
      firstName: '',
      lastName: ''
    }
   }

  ngOnInit() {
  }

  save(){
    this.patientService.addPatient(this.patient)
      .then(res =>{
        console.log(res); 
        this.router.navigate(['home']);
      });
  }

}
