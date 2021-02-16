import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowFacultyDetailsComponent } from './show-details.component';

describe('ShowFacultyDetailsComponent', () => {
  let component: ShowFacultyDetailsComponent;
  let fixture: ComponentFixture<ShowFacultyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ShowFacultyDetailsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowFacultyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
