import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResonerComponent } from './resoner.component';

describe('ResonerComponent', () => {
  let component: ResonerComponent;
  let fixture: ComponentFixture<ResonerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResonerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResonerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
