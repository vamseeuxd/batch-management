import { Component, OnDestroy, OnInit } from '@angular/core';
import { FacultyService } from './services/service';
import { IColumn, IFaculty, ModuleConfig } from './utilities/ModuleConfig';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-faculties',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class FacultiesComponent implements OnDestroy {
  readonly MODULE_CONFIG = ModuleConfig;
  columns: IColumn[] = [
    { size: 'col-md-4 col-sm-12', field: 'name', title: 'Faculty Name' },
    {
      size: 'col-md-4 col-sm-6 d-none d-md-block',
      field: 'mobile',
      title: 'Faculty Mobile',
    },
    {
      size: 'col-md-4 col-sm-6 d-none d-md-block',
      field: 'email',
      title: 'Faculty Email',
    },
  ];

  rowData: IFaculty[] = [];
  private rowDataSubscription: Subscription;

  constructor(public service: FacultyService) {
    this.rowData = [];
    this.rowDataSubscription = this.service
      .getData()
      .subscribe((value) => (this.rowData = value));
  }

  ngOnDestroy(): void {
    this.rowDataSubscription.unsubscribe();
  }
}
