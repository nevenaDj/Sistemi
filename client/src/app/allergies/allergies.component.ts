import { Component, OnInit } from '@angular/core';
import { PatientService } from '../add-patient/patient.service';
import { ActivatedRoute, Router } from '@angular/router';
import { AllergyService } from '../add-allergy/allergy.service';
import { AllergyCure } from '../model/allergy-cure';
import { AllergyComponent } from '../model/allergy-component';

@Component({
  selector: 'app-allergies',
  templateUrl: './allergies.component.html',
  styleUrls: ['./allergies.component.css']
})
export class AllergiesComponent implements OnInit {

  patient: PatientInterface;
  patientId: number;
  flag: boolean;

  allergyComponents: AllergyComponent[];
  allergyCures: AllergyCure[];

  values : any[];

  constructor(private patientService: PatientService,
              private allergyService: AllergyService,
              private router: Router,
              private route: ActivatedRoute) {

    this.values = [
      { 
        name: 'Lekove',
        flag: true
      },
      { 
        name: 'Sastojke lekova',
        flag: false
      },
                  ];
    this.flag = true;
    this.patient = {
      id : null,
      firstName : '',
      lastName: '',
      doctor : null
    }
    this.allergyCures = [];
    this.allergyComponents = [];
    this.patientId = this.route.snapshot.parent.params['id'];
    this.patientService.getPatient(this.patientId)
          .then(patient => {
            this.patient = patient;
            this.getAllergyCures();
          });
   }

  ngOnInit() {
  }

  gotoPatientDetail(){
    this.router.navigate([`/home/patient/${this.patientId}/detail`]);

  }

  getAllergyComponents(){
    this.allergyCures = [];
    this.allergyService.getAllergyComponents(this.patientId)
        .then(res => this.allergyComponents = res);

  }

  getAllergyCures(){
    this.allergyComponents = [];
    this.allergyService.getAllergyCures(this.patientId)
        .then(res => this.allergyCures = res);
  }

  objChanged($event){
    if (!this.flag){
      this.getAllergyCures();
    }else{
      this.getAllergyComponents();
    }
  }

  gotoAddAllergyCure(){
    this.router.navigate([`/home/patient/${this.patientId}/allergy/cure`]);

  }

  gotoAddAllergyComponent(){
    this.router.navigate([`/home/patient/${this.patientId}/allergy/component`]);

  }

}
