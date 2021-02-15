import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteFacultyComponent } from './delete-faculty.component';

describe('DeleteFacultyComponent', () => {
  let component: DeleteFacultyComponent;
  let fixture: ComponentFixture<DeleteFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeleteFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
