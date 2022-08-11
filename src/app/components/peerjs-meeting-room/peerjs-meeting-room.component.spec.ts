import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PeerjsMeetingRoomComponent } from './peerjs-meeting-room.component';

describe('PeerjsMeetingRoomComponent', () => {
  let component: PeerjsMeetingRoomComponent;
  let fixture: ComponentFixture<PeerjsMeetingRoomComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PeerjsMeetingRoomComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PeerjsMeetingRoomComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
