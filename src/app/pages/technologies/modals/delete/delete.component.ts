import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../services/service';
import { IData, ModuleConfig } from '../../utilities/ModuleConfig';

@Component({
  selector: 'app-delete-faculty',
  templateUrl: './delete.component.html',
  styleUrls: ['./delete.component.scss'],
})
export class DeleteComponent {
  readonly MODULE_CONFIG = ModuleConfig;
  @Input() label = '<i class="fa fa-trash"></i>';
  @Input() title =
    'Delete ' + this.MODULE_CONFIG.name_capitalize + ' Confirmation';
  @Input() message =
    'Are you sure ! Do you want to Delete ' +
    this.MODULE_CONFIG.name_capitalize +
    '?';
  @Input() buttonClass = 'btn btn-outline-danger btn-sm';
  @Input() data: IData = { id: '', description: '', name: '' };
  @Output() onDelete: EventEmitter<any> = new EventEmitter<any>();
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
