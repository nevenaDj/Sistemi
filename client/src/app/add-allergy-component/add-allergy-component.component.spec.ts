import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddAllergyComponentComponent } from './add-allergy-component.component';

describe('AddAllergyComponentComponent', () => {
  let component: AddAllergyComponentComponent;
  let fixture: ComponentFixture<AddAllergyComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddAllergyComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddAllergyComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
