import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTypeaheadComponent } from './faculty-typeahead.component';

describe('FacultyTypeaheadComponent', () => {
  let component: FacultyTypeaheadComponent;
  let fixture: ComponentFixture<FacultyTypeaheadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FacultyTypeaheadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTypeaheadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
