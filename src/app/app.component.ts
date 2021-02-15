import {Component} from '@angular/core';
import {BusyIndicatorService} from './services/busy-indicator/busy-indicator.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(public busyIndicator: BusyIndicatorService) {
  }
}
