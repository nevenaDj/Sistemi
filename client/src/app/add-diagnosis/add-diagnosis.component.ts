import { Component, OnInit } from '@angular/core';
import { Disease } from '../model/disease';
import { DiseaseService } from '../add-disease/disease.service';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../add-patient/patient.service';

@Component({
  selector: 'app-add-diagnosis',
  templateUrl: './add-diagnosis.component.html',
  styleUrls: ['./add-diagnosis.component.css']
})
export class AddDiagnosisComponent implements OnInit {

  diseases : Disease[];
  disease : Disease;
  patientId : number;

  constructor(private diseaseService: DiseaseService,
              private patientService: PatientService,
              private route: ActivatedRoute,
              private router: Router) {
    this.disease = null;
    this.patientId = +this.route.snapshot.parent.params['id'];
    this.diseaseService.getAllDiseases()
        .then(res => this.diseases = res);
    
   }

  ngOnInit() {
    if(window.location.href.indexOf("loaded") > -1) {}
    else{
      let win = (window as any);
      win.location.href = `/#/home/patient/${this.patientId}/diagnosis/add/loaded`;
      win.location.reload();
    } 
  }

  save(){
    this.patientService.addPatientDisease(this.patientId, this.disease)
        .then(res => this.router.navigate([`/home/patient/${this.patientId}/diagnosis/${res}/therapy`]));

  }
}
