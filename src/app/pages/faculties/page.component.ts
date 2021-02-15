import {Component, OnInit} from '@angular/core';
import {FacultyService} from './services/faculty/faculty.service';
import {ModuleConfig} from './utilities/ModuleConfig';

@Component({
  selector: 'app-faculties',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class FacultiesComponent implements OnInit {
  readonly MODULE_CONFIG = ModuleConfig;
  columns = [
    {size: 'col-md-4 col-sm-12', field: 'name', title: 'Faculty Name'},
    {size: 'col-md-4 col-sm-6 d-none d-md-block', field: 'mobile', title: 'Faculty Mobile'},
    {size: 'col-md-4 col-sm-6 d-none d-md-block', field: 'email', title: 'Faculty Email'},
  ];

  rowData = [];

  constructor(
    public service: FacultyService
  ) {
    this.rowData = [];
    this.service.getData().subscribe(value => {
      this.rowData = value;
    });
  }

  ngOnInit(): void {
  }

}
