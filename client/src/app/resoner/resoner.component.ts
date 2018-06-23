import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SymptomService } from '../add-disease/symptom.service';
import { Symptom } from '../model/symptom';
import { DiseaseService } from '../add-disease/disease.service';
import { Disease } from '../model/disease';
import { ActivatedRoute, Router } from '@angular/router';
import { PatientService } from '../add-patient/patient.service';

@Component({
  selector: 'app-resoner',
  templateUrl: './resoner.component.html',
  styleUrls: ['./resoner.component.css']
})
export class ResonerComponent implements OnInit {

  symptoms : Symptom[];
  selectedSymptoms : Symptom[];
  diseases : Disease[];
  patientId: number;

  constructor(private symptomService: SymptomService,
              private diseaseService: DiseaseService,
              private patientService: PatientService,
              private router: Router,
              private route : ActivatedRoute,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
    this.selectedSymptoms = [];
    this.diseases = [];
    this.getAllSymptoms();
    this.patientId = +this.route.snapshot.parent.params['id'];
   }

  ngOnInit() {
    if(window.location.href.indexOf("loaded") > -1) {}
    else{
      let win = (window as any);
      win.location.href =  `/#/home/patient/${this.patientId}/resoner/loaded`;
      win.location.reload();
    }
  }

  getAllSymptoms(){
    this.symptomService.getAllSymptomsShow()
        .then(res => this.symptoms = res);
  }

  search(){
    console.log(this.selectedSymptoms);
    this.diseaseService.findDisease(this.patientId,this.selectedSymptoms)
        .then(disease => this.diseases = [disease])
        .catch(res => {
          this.diseases = [];
          this.toastr.info('Rezoner nije pronašao bolest koja zadovoljava unete simptome.')
        });
  }

  gotoAddDiagnosis(disease: Disease){
    this.patientService.addPatientDisease(this.patientId, disease)
      .then(res => this.router.navigate([`/home/patient/${this.patientId}/diagnosis/${res}/therapy`]));


  }
}
