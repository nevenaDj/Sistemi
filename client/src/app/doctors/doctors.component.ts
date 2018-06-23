import { Component, OnInit } from '@angular/core';
import { UserService } from '../add-user/user.service';
import { PagerService } from '../pager.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doctors',
  templateUrl: './doctors.component.html',
  styleUrls: ['./doctors.component.css']
})
export class DoctorsComponent implements OnInit {

  doctors: UserInterface[];
  doctorsCount: number;

  pager: any = {};

  constructor(private userService: UserService,
              private pagerService: PagerService,
              private router: Router) { }

  ngOnInit() {
    this.userService.getDoctorsCount()
    .then(count => {
      this.doctorsCount = count;
      this.setPage(1);
      
    });

    
  }

  getDoctors(page: number, size: number){
    this.userService.getDoctors(page, size).then(
        doctors => {
        this.doctors = doctors;
        console.log(this.doctors);
        }
    );
  }

  setPage(page: number){
    if (page < 1 || page > this.pager.totalPages){
      return;
    }

    this.pager = this.pagerService.getPager(this.doctorsCount, page, 5);
    this.getDoctors(this.pager.currentPage - 1, this.pager.pageSize);
  }

  gotoAddDoctor(){
    this.router.navigate(['/admin/user']);

  }

}
