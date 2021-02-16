import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageFacultyComponent } from './manage.component';

describe('ManageFacultyComponent', () => {
  let component: ManageFacultyComponent;
  let fixture: ComponentFixture<ManageFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ManageFacultyComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
