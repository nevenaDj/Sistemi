import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchDiseasesComponent } from './search-diseases.component';

describe('SearchDiseasesComponent', () => {
  let component: SearchDiseasesComponent;
  let fixture: ComponentFixture<SearchDiseasesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchDiseasesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchDiseasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
