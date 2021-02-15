import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.scss']
})
export class FacultiesComponent implements OnInit {

  columns = [
    {size: 'col-md-4 col-sm-12', field: 'name', title: 'Faculty Name'},
    {size: 'col-md-4 col-sm-6 d-none d-md-block', field: 'mobile', title: 'Faculty Mobile'},
    {size: 'col-md-4 col-sm-6 d-none d-md-block', field: 'email', title: 'Faculty Email'},
  ];

  rowData = [];

  constructor() {
    this.rowData = [];
    for (let i = 0; i < 30; i++) {
      const row = {};
      this.columns.forEach(column => {
        switch (column.field) {
          case 'name':
            row[column.field] = column.title + ' ' + i;
            break;
          case 'mobile':
            row[column.field] = column.title + ' ' + i;
            break;
          case 'email':
            row[column.field] = column.title + ' ' + i;
            break;
        }
      });
      this.rowData.push(row);
    }
  }

  ngOnInit(): void {
  }

}
