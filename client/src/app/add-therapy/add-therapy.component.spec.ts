import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTherapyComponent } from './add-therapy.component';

describe('AddTherapyComponent', () => {
  let component: AddTherapyComponent;
  let fixture: ComponentFixture<AddTherapyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddTherapyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTherapyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
