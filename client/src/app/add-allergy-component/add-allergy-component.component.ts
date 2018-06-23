import { Component, OnInit, ViewContainerRef } from '@angular/core';
import { ToastsManager } from 'ng2-toastr/ng2-toastr';
import { CureComponent } from '../model/component';
import { ActivatedRoute, Router } from '@angular/router';
import { ComponentService } from '../add-cure/component.service';
import { AllergyService } from '../add-allergy/allergy.service';
import { AllergyComponent } from '../model/allergy-component';


@Component({
  selector: 'app-add-allergy-component',
  templateUrl: './add-allergy-component.component.html',
  styleUrls: ['./add-allergy-component.component.css']
})
export class AddAllergyComponentComponent implements OnInit {

  patientId : number;
  components : CureComponent[];
  component: CureComponent;
  allergyComponent: AllergyComponent;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private allergyService: AllergyService,
              private componentService: ComponentService,
              private toastr: ToastsManager, 
              private vcr: ViewContainerRef) {
    this.toastr.setRootViewContainerRef(vcr); 
    this.allergyComponent = {
      id: null,
      component: null
    }
    this.patientId = +this.route.snapshot.parent.params['id'];
    this.componentService.getAllComponents()
        .then(components => this.components = components);
   }

  ngOnInit() {
    if(window.location.href.indexOf("loaded") > -1) {}
    else{
      let win = (window as any);
      win.location.href = `/#/home/patient/${this.patientId}/allergy/component/loaded`;
      win.location.reload();
    } 
  }

  save(){
    this.allergyComponent.component = this.component;
    this.allergyService.addAllergyComponent(this.allergyComponent, this.patientId)
        .then(res => this.router.navigate([`/home/patient/${this.patientId}/detail`]))
        .catch(res => this.toastr.info('Alergija pacijenta na ovaj sastojak leka je već zapisana.'))
  }


}
