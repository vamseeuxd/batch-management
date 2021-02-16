import { Component, OnDestroy, OnInit } from '@angular/core';
import { Service } from './services/service';
import { IColumn, IData, ModuleConfig } from './utilities/ModuleConfig';
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
    {
      size: 'col-md-6 col-sm-12',
      field: 'name',
      title: '' + this.MODULE_CONFIG.name_capitalize + ' Name',
    },
    {
      size: 'col-md-6 col-sm-6 d-none d-md-block',
      field: 'description',
      title: '' + this.MODULE_CONFIG.name_capitalize + ' Description',
    },
  ];

  rowData: IData[] = [];
  private rowDataSubscription: Subscription;

  constructor(
    public service: Service,
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
