import {Component} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {BatchesService} from '../../services/batches/batches.service';

@Component({
  selector: 'app-manage-batches',
  templateUrl: './manage-batches.component.html',
  styleUrls: ['./manage-batches.component.scss']
})
export class ManageBatchesComponent {

  constructor(
    public service: BatchesService,
    config: NgbModalConfig,
    private modalService: NgbModal
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
