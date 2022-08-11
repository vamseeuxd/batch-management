import { Injectable } from '@angular/core';

declare var Peer: any;

const constraints: MediaStreamConstraints = { video: true, audio: false };

@Injectable({
  providedIn: 'root',
})
export class WebrtcService {
  peer;
  myStream: MediaStream;
  myEl: HTMLMediaElement;
  partnerEl: HTMLMediaElement;

  stun = 'stun.l.google.com:19302';
  mediaConnection;
  options;
  stunServer: RTCIceServer = {
    urls: 'stun:' + this.stun,
  };

  constructor() {
    this.options = {
      // not used, by default it'll use peerjs server
      key: 'cd1ft79ro8g833di',
      debug: 3,
    };
  }

  getMedia(): void {
    navigator.getUserMedia(
      { audio: true, video: true },
      (stream) => {
        this.handleSuccess(stream);
      },
      (error) => {
        this.handleError(error);
      }
    );
  }

  async init(
    userId: string,
    myEl: HTMLMediaElement,
    partnerEl: HTMLMediaElement
  ): Promise<any> {
    this.myEl = myEl;
    this.partnerEl = partnerEl;
    try {
      this.getMedia();
    } catch (e) {
      this.handleError(e);
    }
    await this.createPeer(userId);
  }

  async createPeer(userId: string): Promise<any> {
    this.peer = new Peer(userId);
    this.peer.on('open', () => {
      this.wait();
    });
  }

  call(partnerId: string): void {
    const call = this.peer.call(partnerId, this.myStream);
    call.on('stream', (stream) => {
      this.partnerEl.srcObject = stream;
    });
  }

  wait(): void {
    this.peer.on('call', (call) => {
      call.answer(this.myStream);
      call.on('stream', (stream) => {
        this.partnerEl.srcObject = stream;
      });
    });
  }

  handleSuccess(stream: MediaStream): void {
    this.myStream = stream;
    this.myEl.srcObject = stream;
  }

  handleError(error: any): void {
    if (error.name === 'ConstraintNotSatisfiedError') {
      const v = constraints.video;
      // this.errorMsg(`The resolution ${v.width.exact}x${v.height.exact} px is not supported by your device.`);
      this.errorMsg(`The resolution px is not supported by your device.`);
    } else if (error.name === 'PermissionDeniedError') {
      this.errorMsg(
        'Permissions have not been granted to use your camera and ' +
          'microphone, you need to allow the page access to your devices in ' +
          'order for the demo to work.'
      );
    }
    this.errorMsg(`getUserMedia error: ${error.name}`, error);
  }

  errorMsg(msg: string, error?: any): void {
    const errorElement = document.querySelector('#errorMsg');
    errorElement.innerHTML += `<p>${msg}</p>`;
    if (typeof error !== 'undefined') {
      console.error(error);
    }
  }
}
