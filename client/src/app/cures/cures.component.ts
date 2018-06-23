import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CureService } from '../add-cure/cure.service';
import { Cure } from '../model/cure';
import { PagerService } from '../pager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cures',
  templateUrl: './cures.component.html',
  styleUrls: ['./cures.component.css']
})
export class CuresComponent implements OnInit {

  cures: Cure[];
  curesCount: number;

  pager: any = {};

  constructor(private cureService: CureService,
              private pagerService: PagerService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);  
  }

  ngOnInit() {
    this.cureService.getCuresCount()
    .then(count => {
      this.curesCount = count;
      this.setPage(1);
    });
  }

  getCures(page: number, size: number){
    this.cureService.getCures(page, size).then(
      cures => this.cures = cures
    );
  }

  setPage(page: number){
    if (page < 1 || page > this.pager.totalPages){
      return;
    }

    this.pager = this.pagerService.getPager(this.curesCount, page, 5);
    this.getCures(this.pager.currentPage - 1, this.pager.pageSize);
  }

  gotoAddCure(){
    this.router.navigate(['/admin/cure']);
  }

  deleteCure(id: number){
    this.cureService.deleteCure(id)
        .then(res => {
          this.setPage(1);
          this.toastr.success('Lek uspešno obrisan.')
        })
        .catch(res => this.toastr.error('Lek se ne može obrisati.'));
  }

}
