import {Component, Input, OnInit} from '@angular/core';
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {FacultyService} from '../../services/faculty/faculty.service';
import {IFaculty} from '../../utilities/ModuleConfig';

@Component({
  selector: 'app-show-faculty-details',
  templateUrl: './show-faculty-details.component.html',
  styleUrls: ['./show-faculty-details.component.scss']
})
export class ShowFacultyDetailsComponent {

  @Input() label = '<i class="fa fa-external-link"></i>';
  @Input() title = 'Faculty Details';
  @Input() message = 'Are you sure ! Do you want to Delete Faculty?';
  @Input() buttonClass = 'btn btn-outline-primary btn-sm';
  @Input() data: IFaculty = {id: '', email: '', mobile: '', name: ''};

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

}
