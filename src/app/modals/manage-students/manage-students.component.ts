import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {IBatch} from '../../services/batch.interface';
import {BatchesService} from '../../services/batches.service';

@Component({
  selector: 'app-manage-students',
  templateUrl: './manage-students.component.html',
  styleUrls: ['./manage-students.component.scss']
})
export class ManageStudentsComponent {
  @Input() batch: IBatch;

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
