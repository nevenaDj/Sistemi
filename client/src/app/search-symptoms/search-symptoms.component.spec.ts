import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchSymptomsComponent } from './search-symptoms.component';

describe('SearchSymptomsComponent', () => {
  let component: SearchSymptomsComponent;
  let fixture: ComponentFixture<SearchSymptomsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchSymptomsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchSymptomsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
