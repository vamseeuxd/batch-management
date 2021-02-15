import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {FacultyService} from '../../services/faculty/faculty.service';
import {IFaculty} from '../../utilities/ModuleConfig';

@Component({
  selector: 'app-manage-faculty',
  templateUrl: './manage-faculty.component.html',
  styleUrls: ['./manage-faculty.component.scss']
})
export class ManageFacultyComponent {
  @Input() label = 'Add New Faculty';
  @Input() isEdit = false;
  @Input() title = 'Add New Faculty';
  @Input() buttonClass = 'btn btn-outline-primary btn-sm';
  @Input() data: IFaculty = {id: '', email: '', mobile: '', name: ''};
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public service: FacultyService,
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content);
  }

  async saveData(close, value: IFaculty): Promise<null> {
    if (!this.isEdit) {
      try {
        const result = await this.service.addData(value);
        this.onSave.emit(result);
        close('Done');
      } catch (e) {
        this.onError.emit(e);
        close('Error');
      }
    } else {
      try {
        const result = await this.service.updateData({...value, id: this.data.id});
        this.onSave.emit(result);
        close('Done');
      } catch (e) {
        this.onError.emit(e);
        close('Error');
      }
    }
    return new Promise(null);
  }
}
