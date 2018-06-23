import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthService } from '../login/auth.service';

@Component({
  selector: 'app-home-admin',
  templateUrl: './home-admin.component.html',
  styleUrls: ['./home-admin.component.css']
})
export class HomeAdminComponent implements OnInit {

  constructor(private auth: AuthService,
    private router: Router) { }
    
  ngOnInit() {
    // this.auth.redirect(); 
  }
  
  logout(){
    this.auth.logout();
  }

  /*ngAfterContentInit() {
    document.getElementById('preloader').classList.add('hide');
    jQuery('select').selectpicker();
  } 
  */
}
