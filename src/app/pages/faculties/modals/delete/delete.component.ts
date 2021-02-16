import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { FacultyService } from '../../services/service';
import { IFaculty } from '../../utilities/ModuleConfig';

@Component({
  selector: 'app-delete-faculty',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteFacultyComponent {
  @Input() label = '<i class="fa fa-trash"></i>';
  @Input() title = 'Delete Faculty Confirmation';
  @Input() message = 'Are you sure ! Do you want to Delete Faculty?';
  @Input() buttonClass = 'btn btn-outline-danger btn-sm';
  @Input() data: IFaculty = { id: '', email: '', mobile: '', name: '' };
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public service: FacultyService
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content);
  }

  async deleteData(close): Promise<null> {
    try {
      const result = await this.service.deleteData(this.data);
      this.onDelete.emit(result);
      close('Done');
    } catch (e) {
      this.onError.emit(e);
      close('Error');
    }
    return new Promise(null);
  }
}
