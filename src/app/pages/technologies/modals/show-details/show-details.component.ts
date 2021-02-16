import { Component, Input, OnInit } from '@angular/core';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import { Service } from '../../services/service';
import { IData, ModuleConfig } from '../../utilities/ModuleConfig';

@Component({
  selector: 'app-show-faculty-details',
  templateUrl: './show-details.component.html',
  styleUrls: ['./show-details.component.scss'],
})
export class ShowDetailsComponent {
  readonly MODULE_CONFIG = ModuleConfig;
  @Input() label = '<i class="fa fa-external-link"></i>';
  @Input() title = '' + this.MODULE_CONFIG.name_capitalize + ' Details';
  @Input() message =
    'Are you sure ! Do you want to Delete ' +
    this.MODULE_CONFIG.name_capitalize +
    '?';
  @Input() buttonClass = 'btn btn-outline-primary btn-sm';
  @Input() data: IData = { id: '', description: '', name: '' };

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
}
