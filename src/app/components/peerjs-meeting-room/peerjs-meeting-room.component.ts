import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  Input,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { BusyIndicatorService } from '../../services/busy-indicator/busy-indicator.service';
import { WebrtcService } from '../app-header/webrtc.service';

declare var Peer: any;

@Component({
  selector: 'app-peerjs-meeting-room',
  templateUrl: './peerjs-meeting-room.component.html',
  styleUrls: ['./peerjs-meeting-room.component.scss'],
})
export class PeerjsMeetingRoomComponent {
  topVideoFrame = 'partner-video';
  userId = 'vamseekalyan';
  partnerId = 'krishnasukanya';
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;
  @Input() initiator = false;

  constructor(
    public webRTC: WebrtcService,
    public elRef: ElementRef,
    public busyIndicator: BusyIndicatorService
  ) {}

  reverse(): void {
    this.partnerId = 'vamseekalyan';
    this.userId = 'krishnasukanya';
  }

  init(): void {
    this.myEl = this.elRef.nativeElement.querySelector('#my-video');
    this.partnerEl = this.elRef.nativeElement.querySelector('#partner-video');
    this.webRTC.init(this.userId, this.myEl, this.partnerEl);
  }

  call(): void {
    this.webRTC.call(this.partnerId);
    this.swapVideo('my-video');
  }

  swapVideo(topVideo: string): void {
    this.topVideoFrame = topVideo;
  }
}
