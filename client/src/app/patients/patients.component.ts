import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PatientService } from '../add-patient/patient.service';
import { PagerService } from '../pager.service';

@Component({
  selector: 'app-patients',
  templateUrl: './patients.component.html',
  styleUrls: ['./patients.component.css']
})
export class PatientsComponent implements OnInit {

  patients : PatientInterface[];
  patientCount : number;
  pager: any = {};

  constructor(private router: Router,
              private pagerService: PagerService,
              private patientService: PatientService) {
    this.patients = [];
  }

  ngOnInit() {
    this.patientService.getPatientsCount()
    .then(count => {
      this.patientCount = count;
      this.setPage(1);
    });  
  }

  gotoPatientDetail(id : number){
    this.router.navigate([`/home/patient/${id}/detail`]);
  }

  getDiseases(page: number, size: number){
    this.patientService.getPatients(page, size).then(
        patients => this.patients = patients
    );
  }

  setPage(page: number){
    if (page < 1 || page > this.pager.totalPages){
      return;
    }

    this.pager = this.pagerService.getPager(this.patientCount, page, 5);
    this.getDiseases(this.pager.currentPage - 1, this.pager.pageSize);
  }

}
