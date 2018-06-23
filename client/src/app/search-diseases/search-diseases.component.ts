import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SymptomService } from '../add-disease/symptom.service';
import { Symptom } from '../model/symptom';
import { DiseaseService } from '../add-disease/disease.service';
import { Disease } from '../model/disease';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-diseases',
  templateUrl: './search-diseases.component.html',
  styleUrls: ['./search-diseases.component.css']
})
export class SearchDiseasesComponent implements OnInit {

  symptoms : Symptom[];
  selectedSymptoms : Symptom[];
  diseases : Disease[];
  patientId: number;

  constructor(private symptomService: SymptomService,
              private diseaseService: DiseaseService,
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
      win.location.href =  `/#/home/patient/${this.patientId}/disease/search/loaded`;
      win.location.reload();
    }
  }

  getAllSymptoms(){
    this.symptomService.getAllSymptoms()
        .then(res => this.symptoms = res);
  }

  search(){
    console.log(this.selectedSymptoms);
   // this.diseaseService.findDisease(this.selectedSymptoms);
    this.diseaseService.searchDiseases(this.selectedSymptoms)
        .then(diseases => this.diseases = diseases)
        .catch(res => {
          this.diseases = [];
          this.toastr.info('Simptom ne pripada ni jednoj bolesti.');
        });

  }
}
