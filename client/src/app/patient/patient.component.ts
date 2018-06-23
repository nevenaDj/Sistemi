import { Component, OnInit } from '@angular/core';
import { PatientService } from '../add-patient/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientDisease } from '../model/patient-disease';

@Component({
  selector: 'app-patient',
  templateUrl: './patient.component.html',
  styleUrls: ['./patient.component.css']
})
export class PatientComponent implements OnInit {

  patient: PatientInterface;
  patientId: number;
  patientDisease: PatientDisease[];
  today: Date;
 

  constructor(private patientService: PatientService,
              private route: ActivatedRoute,
              private router: Router) {
    this.today = new Date();
    var d = new Date();
    console.log(d.toLocaleDateString());
    
    let dateString = '1968-11-16T00:00:00';
    let newDate = new Date(dateString);
    console.log(newDate.toLocaleDateString());

    if (d.toLocaleDateString() < newDate.toLocaleDateString()){
      console.log(true);
    }

    this.patient = {
      id : null,
      firstName : '',
      lastName: '',
      doctor : null
    }
    this.patientId = this.route.snapshot.parent.params['id'];
    this.patientService.getPatient(this.patientId)
          .then(patient => {
            this.patient = patient;
            this.patientService.getPatientDiseases(this.patientId)
                .then(res => this.patientDisease = res);
          });
   }

  ngOnInit() {
  }

  gotoAllergies(){
    this.router.navigate([`/home/patient/${this.patientId}/allergies`]);

  }

  compareDate(dateD: Date){
    console.log(dateD);
    var d1 = new Date(dateD);
    var d1s = d1.toLocaleDateString();

    var d2 = this.today.toLocaleDateString();
    if (d1s == d2){
      return true;
    } else{
      return false;
    }
  }

  addDiagnosis(id: number){
    this.router.navigate([`/home/patient/${this.patientId}/diagnosis/${id}/therapy`])
  }

}
