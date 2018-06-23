import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ReportService } from '../report1/report.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-report3',
  templateUrl: './report3.component.html',
  styleUrls: ['./report3.component.css']
})
export class Report3Component implements OnInit {

  patients : PatientInterface[]

  constructor(private reportService: ReportService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
    this.patients = [];
    this.reportService.getReport3()
        .then( res => this.patients = res)
        .catch( res => this.toastr.info('Ne postoje pacijenti sa oslabljenim imunitetom.'));
   }

  ngOnInit() {
  }

  gotoPatientDetail(id : number){
    this.router.navigate([`/home/patient/${id}/detail`]);
  }

}
