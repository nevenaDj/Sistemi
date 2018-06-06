import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddCureComponent } from './add-cure.component';

describe('AddCureComponent', () => {
  let component: AddCureComponent;
  let fixture: ComponentFixture<AddCureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddCureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddCureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
