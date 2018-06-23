import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { CureService } from '../add-cure/cure.service';
import { Cure } from '../model/cure';
import { PatientService } from '../add-patient/patient.service';

@Component({
  selector: 'app-add-therapy',
  templateUrl: './add-therapy.component.html',
  styleUrls: ['./add-therapy.component.css']
})
export class AddTherapyComponent implements OnInit {

  patientId : number;
  diagnosisId : number;
  cures : Cure[];
  selectedCures : Cure[];

  constructor(private cureService : CureService,
              private patientService : PatientService,
              private route : ActivatedRoute,
              private router: Router,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
    this.patientId = +this.route.snapshot.parent.params['id'];
    this.diagnosisId = +this.route.snapshot.params['id'];
    this.selectedCures = [];

    this.cureService.getAllCures()
        .then(cures => this.cures = cures);

  }

  ngOnInit() {
    if(window.location.href.indexOf("loaded") > -1) {}
    else{
      let win = (window as any);
      win.location.href = `/#/home/patient/${this.patientId}/diagnosis/${this.diagnosisId}/therapy/loaded`;
      win.location.reload();
    } 
  }

  save(){
    this.patientService.addTherapy(this.patientId, this.diagnosisId, this.selectedCures)
        .then(res => this.router.navigate([`/home/patient/${this.patientId}/detail`]))
        .catch(res => this.toastr.error('Pacijent je alergičan na prepisanu terapiju.'))
  }

  gotoAddAllergyCure(){
    this.router.navigate([`/home/patient/${this.patientId}/allergy/cure`]);

  }

  gotoAddAllergyComponent(){
    this.router.navigate([`/home/patient/${this.patientId}/allergy/component`]);

  }
}
