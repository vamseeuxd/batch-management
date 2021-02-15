import {Component, OnInit} from '@angular/core';
import * as faker from 'faker';
import {FacultyService} from '../../services/faculty/faculty.service';

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

  constructor(
    public service: FacultyService
  ) {
    console.log(faker);
    this.rowData = [];
    this.service.getData().subscribe(value => {
      this.rowData = value;
    });
    for (let i = 0; i < 0; i++) {
      const row = {};
      this.columns.forEach(column => {
        switch (column.field) {
          case 'name':
            row[column.field] = faker.Name.firstName() + ' ' + faker.Name.lastName();
            break;
          case 'mobile':
            row[column.field] = faker.PhoneNumber.phoneNumberFormat(0);
            break;
          case 'email':
            row[column.field] = faker.Internet.email();
            break;
        }
      });
      this.rowData.push(row);
    }
  }

  ngOnInit(): void {
  }

}
