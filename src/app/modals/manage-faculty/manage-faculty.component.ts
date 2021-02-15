import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {BatchesService} from '../../services/batches.service';

export interface IFaculty {
  id?: string;
  name: string;
  email: string;
  mobile: string;
}

@Component({
  selector: 'app-manage-faculty',
  templateUrl: './manage-faculty.component.html',
  styleUrls: ['./manage-faculty.component.scss']
})
export class ManageFacultyComponent {
  @Input() label = 'Add New Faculty';
  @Input() title = 'Add New Faculty';
  @Input() buttonClass = 'btn btn-outline-primary btn-sm';
  @Input() data: IFaculty = {id: '', email: '', mobile: '', name: ''};

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public service: BatchesService,
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content);
  }

}
