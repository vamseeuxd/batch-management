import { Component, OnDestroy, OnInit } from '@angular/core';
import { FacultyService } from './services/service';
import { IColumn, IFaculty, ModuleConfig } from './utilities/ModuleConfig';
import { Subscription } from 'rxjs';
import { BusyIndicatorService } from '../../services/busy-indicator/busy-indicator.service';

@Component({
  selector: 'app-faculties',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent implements OnDestroy {
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

  constructor(
    public service: FacultyService,
    public busyIndicatorService: BusyIndicatorService
  ) {
    this.rowData = [];
    const busyIndicatorId = busyIndicatorService.show();
    this.rowDataSubscription = this.service.getData().subscribe((value) => {
      this.rowData = value;
      this.busyIndicatorService.hide(busyIndicatorId);
    });
  }

  ngOnDestroy(): void {
    this.rowDataSubscription.unsubscribe();
  }
}
