import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { UserService } from './user.service';
import { Router } from '@angular/router';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {
  user: UserInterface;

  constructor(private userService: UserService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr);
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
      .then(res => {
        console.log(res);
        this.router.navigate(['admin']);
      })
      .catch(res => this.toastr.error('Korisničko ime je već upotrebljeno ili je prekratko (minimum 4 karaktera).'));
  }

}
