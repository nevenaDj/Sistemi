import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ComponentService } from '../add-cure/component.service';
import { CureComponent } from '../model/component';
import { PagerService } from '../pager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.css']
})
export class ComponentsComponent implements OnInit {

  components: CureComponent[];
  componentsCount: number;

  pager: any = {};

  constructor(private componentService: ComponentService,
              private pagerService: PagerService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
  }

  ngOnInit() {
    this.componentService.getComponentsCount()
    .then(count => {
      this.componentsCount = count;
      this.setPage(1);
    });
  }

  getComponents(page: number, size: number){
    this.componentService.getComponents(page, size).then(
      components => this.components = components
    );
  }

  setPage(page: number){
    if (page < 1 || page > this.pager.totalPages){
      return;
    }

    this.pager = this.pagerService.getPager(this.componentsCount, page, 10);
    this.getComponents(this.pager.currentPage - 1, this.pager.pageSize);
  }

  gotoAddCure(){
    this.router.navigate(['/admin/cure']);
  }

  deleteComponent(id: number){
    this.componentService.deleteComponent(id)
        .then(res => {
            this.setPage(1);
            this.toastr.success('Sastojak uspešno obrisan.')
        })
        .catch(res => this.toastr.error('Sastojak se ne može obrisati.'));
  }

}
