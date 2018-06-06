import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

import { Symptom } from '../model/symptom';
import { Disease } from '../model/disease';
import { SymptomService } from './symptom.service';
import { DiseaseService } from './disease.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-disease',
  templateUrl: './add-disease.component.html',
  styleUrls: ['./add-disease.component.css']
})
export class AddDiseaseComponent implements OnInit {

  disease: Disease;
  symptom: Symptom;
  symptoms: Symptom[];

  selectedObj: number;


  constructor(private symptomService: SymptomService,
              private diseaseService: DiseaseService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.disease = {
      id: null,
      name: '',
      symptoms: [
        {
          id: null,
          name: ''
        }
      ]
    };

    this.symptom = {
      id: null,
      name: ''
    };

    this.getAllSymptoms();
  }
  

  ngOnInit() {
  }

  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
    jQuery('select').selectpicker();
  } 

  save(){
    this.diseaseService.addDisease(this.disease)
        .then(res => this.router.navigate(['/admin']));
  }

  saveSymptom(){
    console.log(this.symptom);
    this.symptomService.addSymptom(this.symptom)
        .then(res => { 
          this.toastr.info('Simptom uspešno upisan.');
          this.symptom.name = '';
          window.location.reload();
        });
  }

  getAllSymptoms(){
    this.symptomService.getAllSymptoms()
        .then(res => this.symptoms = res);
  }

  objChanged($event){
    console.log(this.disease);
  }

}
