import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: UserInterface;

  constructor(private userService: UserService,
              private router: Router) {
    this.user = {
      username: '',
      firstName: '',
      lastName: '',
      expertise: '',
      roles: null
    }
   }

  ngOnInit() {
  }

  save(){
    this.userService.addUser(this.user)
      .then(res => this.router.navigate(['admin']));
  }

}
