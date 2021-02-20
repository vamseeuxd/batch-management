import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../services/service';
import { IData, ModuleConfig } from '../../utilities/ModuleConfig';

@Component({
  selector: 'app-manage-faculty',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent {
  readonly MODULE_CONFIG = ModuleConfig;
  /*isCollapsed = true;*/
  duplicateAlerts = { name: true, email: true, mobile: true };
  @Input() label = 'Add New ' + this.MODULE_CONFIG.name_capitalize + '';
  @Input() isEdit = false;
  @Input() title = 'Add New ' + this.MODULE_CONFIG.name_capitalize + '';
  @Input() buttonClass = 'btn btn-outline-primary btn-sm';
  @Input() data: IData = { id: '', email: '', mobile: '', name: '' };
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public service: Service
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }

  // tslint:disable-next-line:typedef
  open(content) {
    this.modalService.open(content);
  }

  async saveData(close, value: IData): Promise<null> {
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
        const result = await this.service.updateData({
          ...value,
          id: this.data.id,
        });
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
