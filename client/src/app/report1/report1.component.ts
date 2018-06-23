import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ReportService } from './report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report1',
  templateUrl: './report1.component.html',
  styleUrls: ['./report1.component.css']
})
export class Report1Component implements OnInit {

  patients : PatientInterface[]

  constructor(private reportService: ReportService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
    this.patients = [];
    this.reportService.getReport1()
        .then( res => {
          console.log(res);
          this.patients = res;
          console.log(res);

        })
        .catch( res => this.toastr.info('Ne postoje pacijenti sa mogućim hroničnim oboljenjima.'));
   }

  ngOnInit() {
  }

  gotoPatientDetail(id : number){
    this.router.navigate([`/home/patient/${id}/detail`]);
  }

}
