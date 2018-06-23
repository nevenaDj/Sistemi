import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Cure } from '../model/cure';
import { CureComponent } from '../model/component';
import { CureService } from './cure.service';
import { ComponentService } from './component.service';
import { GroupeService } from './groupe.service';
import { Groupe } from '../model/group';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-cure',
  templateUrl: './add-cure.component.html',
  styleUrls: ['./add-cure.component.css']
})
export class AddCureComponent implements OnInit {

  cure: Cure;
  component: CureComponent;
  components: CureComponent[];
  groups: Groupe[];

  constructor(private cureService: CureService,
              private componentService: ComponentService,
              private groupeService: GroupeService,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
    this.cure = {
      id: null,
      name: '',
      group: null,
      components: [
        {
          id: null,
          name: ''
        }
      ]
    };

    this.component = {
      id: null,
      name: ''
    };

    this.componentService.getAllComponents()
        .then(res =>{
          this.components = res;
          this.groupeService.getAllGroup()
              .then(res => this.groups = res);
        });
  }


  ngOnInit() {
    if(window.location.href.indexOf("loaded") > -1) {}
    else{
      let win = (window as any);
      win.location.href = "/#/admin/cure/loaded";
      win.location.reload();
    }
  }


  ngAfterViewInit() {
    document.getElementById('preloader').classList.add('hide');
    jQuery('select').selectpicker();
  } 


  save(){
    this.cureService.addCure(this.cure)
        .then(res => {
          this.toastr.success('Lek uspešno upisan.');
          this.cure = {
            id: null,
            name: '',
            group: null,
            components: [
              {
                id: null,
                name: ''
              }
            ]
          };
          window.location.reload();
        }).catch(res => this.toastr.error('Prilikom upisa leka došlo je do greške.'));
  }


  saveComponent(){
    this.componentService.addComponent(this.component)
        .then(res => {
          this.toastr.success('Sastojak leka uspešno upisan.');
          this.component.name = '';
          window.location.reload();
        }).catch(res => this.toastr.error('Prilikom upisa sastojka došlo je do greške.'));
  }
}
