import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { SymptomService } from '../add-disease/symptom.service';
import { Symptom } from '../model/symptom';
import { PagerService } from '../pager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-symptoms',
  templateUrl: './symptoms.component.html',
  styleUrls: ['./symptoms.component.css']
})
export class SymptomsComponent implements OnInit {

  symptoms: Symptom[];
  symptomCount: number;

  pager: any = {};

  constructor(private symptomService: SymptomService,
              private pagerService: PagerService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
  }

  ngOnInit() {
    this.symptomService.getSymptomsCount()
    .then(count => {
      this.symptomCount = count;
      this.setPage(1);
    });    
  }

  getSymptoms(page: number, size: number){
    this.symptomService.getSymptoms(page, size).then(
        symptoms => this.symptoms = symptoms
    );
  }

  setPage(page: number){
    if (page < 1 || page > this.pager.totalPages){
      return;
    }

    this.pager = this.pagerService.getPager(this.symptomCount, page, 10);
    this.getSymptoms(this.pager.currentPage - 1, this.pager.pageSize);
  }

  gotoAddDisease(){
    this.router.navigate(['/admin/disease']);
  }

  deleteSymptom(id: number){
    this.symptomService.deleteSymptom(id)
        .then(res => {
          this.setPage(1);
          this.toastr.success('Simptom uspešno obrisan.')
        })
        .catch(res => this.toastr.error('Simptom se ne može obrisati.'));
  }

}
