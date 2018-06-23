import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { Cure } from '../model/cure';
import { ActivatedRoute, Router } from '@angular/router';
import { CureService } from '../add-cure/cure.service';
import { AllergyService } from './allergy.service';
import { AllergyCure } from '../model/allergy-cure';

@Component({
  selector: 'app-add-allergy',
  templateUrl: './add-allergy.component.html',
  styleUrls: ['./add-allergy.component.css']
})
export class AddAllergyComponent implements OnInit {
  patientId : number;
  cures : Cure[];
  cure: Cure;
  allergyCure: AllergyCure;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private allergyService: AllergyService,
              private cureService: CureService,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
    this.allergyCure = {
      id: null,
      cure: null
    }
    this.patientId = +this.route.snapshot.parent.params['id'];
    this.cureService.getAllCures()
        .then(cures => this.cures = cures);
   }

  ngOnInit() {
    if(window.location.href.indexOf("loaded") > -1) {}
    else{
      let win = (window as any);
      win.location.href = `/#/home/patient/${this.patientId}/allergy/cure/loaded`;
      win.location.reload();
    } 
  }

  save(){
    this.allergyCure.cure = this.cure;
    this.allergyService.addAllergyCure(this.allergyCure, this.patientId)
        .then(res => this.router.navigate([`/home/patient/${this.patientId}/detail`]))
        .catch(res => this.toastr.error('Alergija pacijenta na ovaj lek je već zabeležena.'))
  }

}
