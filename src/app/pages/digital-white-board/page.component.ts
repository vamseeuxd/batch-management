import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Subscription } from 'rxjs';
import { BusyIndicatorService } from '../../services/busy-indicator/busy-indicator.service';

@Component({
  selector: 'app-digital-white-board',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss'],
})
export class PageComponent {
  showTopics = false;
  showSlides = false;
  createMeeting = false;
  joinMeeting = false;

  constructor(public busyIndicatorService: BusyIndicatorService) {}

  toggleFullScreen(): void {
    window.document.body.classList.toggle('white-board-full-screen');
  }

  toggleTopics(): void {
    this.showTopics = !this.showTopics;
  }

  toggleSlides(): void {
    this.showSlides = !this.showSlides;
  }
}
