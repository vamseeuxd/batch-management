import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {Service} from '../../services/service';
import {IData, ModuleConfig} from '../../utilities/ModuleConfig';

@Component({
  selector: 'app-manage-faculty',
  templateUrl: './manage.component.html',
  styleUrls: ['./manage.component.scss'],
})
export class ManageComponent {

  constructor(
    config: NgbModalConfig,
    private modalService: NgbModal,
    public service: Service
  ) {
    // customize default values of modals used by this component tree
    config.backdrop = 'static';
    config.keyboard = false;
  }
  readonly MODULE_CONFIG = ModuleConfig;
  /*isCollapsed = true;*/
  duplicateAlerts = {name: false, email: false, mobile: false};
  duplicateAlertsListItems = {};
  saveInProgress = false;
  @Input() label = 'Add New ' + this.MODULE_CONFIG.name_capitalize + '';
  @Input() isEdit = false;
  @Input() title = 'Add New ' + this.MODULE_CONFIG.name_capitalize + '';
  @Input() buttonClass = 'btn btn-outline-primary btn-sm';
  @Input() data: IData = {id: '', email: '', mobile: '', name: ''};
  @Output() onSave: EventEmitter<any> = new EventEmitter<any>();
  @Output() onError: EventEmitter<any> = new EventEmitter<any>();

  // tslint:disable-next-line:typedef
  isDuplicateObject: boolean;

  isDataSame(formData: IData, isFormInValid: boolean): boolean {
    if (!isFormInValid) {
      const isMobileSame =
        formData &&
        formData.mobile &&
        formData.mobile.trim().toLowerCase() ===
        this.data.mobile.trim().toLowerCase();
      const isEmailSame =
        formData &&
        formData.email &&
        formData.email.trim().toLowerCase() ===
        this.data.email.trim().toLowerCase();
      const isNameSame =
        formData &&
        formData.name &&
        formData.name.trim().toLowerCase() ===
        this.data.name.trim().toLowerCase();
      return isMobileSame && isEmailSame && isNameSame;
    }
    return true;
  }

  open(content) {
    this.modalService.open(content);
  }

  async saveData(close, value: IData): Promise<null> {
    this.saveInProgress = true;
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

  isAnyDuplicateObject(formData: IData, records: IData[]): IData {
    let recordsToSearch = records;
    if (this.isEdit) {
      recordsToSearch = records.filter((value) => value.id !== this.data.id);
    }
    const duplicateObject = recordsToSearch.find((value) => {
      const isMobileSame =
        formData &&
        formData.mobile &&
        formData.mobile.trim().toLowerCase() ===
        value.mobile.trim().toLowerCase();
      const isEmailSame =
        formData &&
        formData.email &&
        formData.email.trim().toLowerCase() ===
        value.email.trim().toLowerCase();
      const isNameSame =
        formData &&
        formData.name &&
        formData.name.trim().toLowerCase() === value.name.trim().toLowerCase();
      return isMobileSame && isEmailSame && isNameSame;
    });
    this.isDuplicateObject = !!duplicateObject;
    return duplicateObject;
  }

  getDuplicateValues(field, value, records: IData[]): IData[] {
    return records.filter((d) => {
      if (this.isEdit && this.data.id === d.id) {
        return false;
      }
      return (
        d[field].trim().toLowerCase().indexOf(value.trim().toLowerCase()) >= 0
      );
    });
  }
}
