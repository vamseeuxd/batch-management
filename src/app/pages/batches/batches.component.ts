import {Component, OnDestroy, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {AllModules, Module} from '@ag-grid-enterprise/all-modules';
import {ClientSideRowModelModule} from '@ag-grid-community/client-side-row-model';
import {MasterDetailModule} from '@ag-grid-enterprise/master-detail';
import {MenuModule} from '@ag-grid-enterprise/menu';
import {ColumnsToolPanelModule} from '@ag-grid-enterprise/column-tool-panel';
import {BatchesService} from '../../services/batches.service';
import {Subscription} from 'rxjs';
import {StudentsComponent} from '../students/students.component';
import {ColDef, ColumnApi, GridApi} from 'ag-grid-community';
import {ICellRendererComp} from 'ag-grid-community/dist/lib/rendering/cellRenderers/iCellRenderer';

@Component({
  selector: 'app-batches',
  templateUrl: './batches.component.html',
  styleUrls: ['./batches.component.scss']
})
export class BatchesComponent implements OnDestroy {
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
  detailCellRendererParams;
  detailCellRenderer;
  detailRowHeight;
  frameworkComponents;
  getBatchSubscription: Subscription;
  getRowNodeId = data => data.id;

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public service: BatchesService,
  ) {
    config.backdrop = 'static';
    config.keyboard = false;
    this.gridInit();
  }

  ngOnDestroy(): void {
    this.getBatchSubscription.unsubscribe();
  }

  gridInit(): void {
    this.detailCellRenderer = 'studentsComponent';
    this.frameworkComponents = {studentsComponent: StudentsComponent};
    this.getBatchSubscription = this.service.getBatch().subscribe(value => {
      if (this.rowData) {
        this.gridApi.applyTransaction({update: value});
      } else {
        this.rowData = value;
      }
    });
    this.columnDefs = [
      {
        field: 'name',
        sortable: true,
        filter: true,
        cellRendererParams: {
          icon: 'fa-download'
        },
        cellRenderer: 'agGroupCellRenderer'
      },
      {field: 'startDate', sortable: true, filter: true},
      {field: 'time', sortable: true, filter: true},
      {field: 'facultyName', sortable: true, filter: true},
      {field: 'facultyMobile', sortable: true, filter: true},
      {field: 'description', sortable: true, filter: true},
    ];
    this.defaultColDef = {flex: 1};
    this.groupDefaultExpanded = 0;
    this.detailRowHeight = 340;
    this.detailCellRendererParams = {
      detailGridOptions: {
        columnDefs: [
          {field: 'name', sortable: true, filter: true},
          {field: 'email', sortable: true, filter: true},
          {field: 'mobile', sortable: true, filter: true}
        ],
        icon: 'fa-download',
        defaultColDef: {flex: 1},
        groupDefaultExpanded: 1,
        masterDetail: true,
        detailRowHeight: 450,
      },
      getDetailRowData: params => {
        params.successCallback(params.data.students);
      },
    };
    console.log(this.rowData);
  }

  open(content): void {
    this.modalService.open(content);
  }

  onGridReady($event): void {
    this.gridApi = $event.api;
    this.gridColumnApi = $event.columnApi;
  }
}
