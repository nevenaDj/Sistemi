import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DiseaseService } from '../add-disease/disease.service';
import { Disease } from '../model/disease';
import { ActivatedRoute } from '@angular/router';
import { SymptomService } from '../add-disease/symptom.service';
import { Symptom } from '../model/symptom';

@Component({
  selector: 'app-search-symptoms',
  templateUrl: './search-symptoms.component.html',
  styleUrls: ['./search-symptoms.component.css']
})
export class SearchSymptomsComponent implements OnInit {
  diseases: Disease[];
  disease: Disease;
  patientId: number;
  symptoms : Symptom[];

  constructor(private diseaseService: DiseaseService,
              private symptomService: SymptomService,
              private route: ActivatedRoute,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
    this.patientId = +this.route.snapshot.parent.params['id'];
    this.disease = null;
    this.symptoms = [];
    this.diseaseService.getAllDiseases()
        .then(res => this.diseases = res);
   }


  ngOnInit() {
    if(window.location.href.indexOf("loaded") > -1) {}
    else{
      let win = (window as any);
      win.location.href = `/#/home/patient/${this.patientId}/symptom/search/loaded`;
      win.location.reload();
    }
  }

  search(){
    this.symptomService.findSymptoms(this.disease.name)
        .then(res => this.symptoms = res)
        .catch(res => this.toastr.info('Za traženu bolest nisu uneti simptomi.'));
  }

}
