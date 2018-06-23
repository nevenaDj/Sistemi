import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { DiseaseService } from '../add-disease/disease.service';
import { Disease } from '../model/disease';
import { PagerService } from '../pager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-diseases',
  templateUrl: './diseases.component.html',
  styleUrls: ['./diseases.component.css']
})
export class DiseasesComponent implements OnInit {

  diseases: Disease[];
  diseasesCount: number;

  pager: any = {};

  constructor(private diseaseService: DiseaseService,
              private pagerService: PagerService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
   }

  ngOnInit() {
    this.diseaseService.getDiseasesCount()
    .then(count => {
      this.diseasesCount = count;
      this.setPage(1);
    });    
  }

  getDiseases(page: number, size: number){
    this.diseaseService.getDiseases(page, size).then(
        diseases => this.diseases = diseases
    );
  }

  setPage(page: number){
    if (page < 1 || page > this.pager.totalPages){
      return;
    }

    this.pager = this.pagerService.getPager(this.diseasesCount, page, 5);
    this.getDiseases(this.pager.currentPage - 1, this.pager.pageSize);
  }

  gotoAddDisease(){
    this.router.navigate(['/admin/disease']);
  }

  deleteDisease(id: number){
    this.diseaseService.deleteDisease(id)
        .then(res => {
          this.setPage(1);
          this.toastr.success('Bolest uspešno obrisana.')
        })
        .catch(res => this.toastr.error('Bolest se ne može obrisati.'));
  }

}
