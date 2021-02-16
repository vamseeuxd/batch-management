import { Component, OnDestroy, OnInit } from '@angular/core';
import { ICellRendererAngularComp } from 'ag-grid-angular';
import { IBatch } from '../../services/batches/batch.interface';
import { ColDef, ColumnApi, GridApi } from 'ag-grid-community';
import { Module } from '@ag-grid-enterprise/all-modules';
import { ClientSideRowModelModule } from '@ag-grid-community/client-side-row-model';
import { MasterDetailModule } from '@ag-grid-enterprise/master-detail';
import { MenuModule } from '@ag-grid-enterprise/menu';
import { ColumnsToolPanelModule } from '@ag-grid-enterprise/column-tool-panel';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.scss'],
})
export class StudentsComponent implements ICellRendererAngularComp, OnDestroy {
  isAgGridRow = false;
  batch: IBatch;
  gridApi: GridApi;
  gridColumnApi: ColumnApi;
  modules: Module[] = [
    ClientSideRowModelModule,
    MasterDetailModule,
    MenuModule,
    ColumnsToolPanelModule,
  ];
  rowData;
  columnDefs: ColDef[];
  defaultColDef;
  groupDefaultExpanded;

  agInit(params: any): void {
    this.isAgGridRow = true;
    console.log('agInit------------------------', params);
    this.batch = params.data;
    this.gridInit();
  }

  ngOnDestroy(): void {}

  gridInit(): void {
    this.rowData = this.batch.students;
    this.columnDefs = [
      { field: 'name', sortable: true, filter: true },
      { field: 'email', sortable: true, filter: true },
      { field: 'mobile', sortable: true, filter: true },
    ];
    this.defaultColDef = { flex: 1 };
    this.groupDefaultExpanded = 0;
  }

  refresh(params: any): boolean {
    return false;
  }

  onGridReady($event): void {
    this.gridApi = $event.api;
    this.gridColumnApi = $event.columnApi;
  }
}
