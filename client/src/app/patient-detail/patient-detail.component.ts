import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-patient-detail',
  templateUrl: './patient-detail.component.html',
  styleUrls: ['./patient-detail.component.css']
})
export class PatientDetailComponent implements OnInit {
  patientId : number;

  constructor(private route: ActivatedRoute,
              private router: Router) { 
    
  }

  ngOnInit() {
    this.patientId = this.route.snapshot.params['id'];
  }

  gotoSearchSymptoms(){
    this.router.navigate([`/home/patient/${this.patientId}/symptom/search`]);
  }

  gotoSearchDiseases(){
    this.router.navigate([`/home/patient/${this.patientId}/disease/search`]);
  }

  gotoAddDiagnosis(){
    this.router.navigate([`/home/patient/${this.patientId}/diagnosis/add`]);
  }

  gotoPatientDetail(){
    this.router.navigate([`/home/patient/${this.patientId}/detail`]);

  }

  gotoResoner(){
    this.router.navigate([`/home/patient/${this.patientId}/resoner`]);

  }

}
