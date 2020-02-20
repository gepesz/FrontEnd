import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Event } from '../../interfaces/event';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModifyEventComponent } from '../modify-event/modify-event.component';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventService } from '../../service/event.service';
import { Observable, BehaviorSubject } from 'rxjs';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { Comments } from 'src/app/interfaces/comments';
import { User } from 'src/app/interfaces/user';

@Component({
  selector: 'div[app-event-card]',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  public environment = environment;
  isLoggedIn$: Observable<boolean>; 
  loading: boolean;
  //comments: Comments;
  currentUser$: BehaviorSubject<User>;

  @Input()
  event: Event;
  comments: Comments;

  constructor(private modalService: NgbModal, private eventService: EventService, public route: ActivatedRoute,
    private loginService: LoginServiceService, private rating: NgbRatingConfig) {
      this.loading = false;
      rating.max = 5;
      rating.readonly = true;
      this.comments = {};
    }


  ngOnInit() {
    this.event.pictureId;
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    this.currentUser$ = this.loginService.currentUser;
  }

  modifyEvent(): void {
    const modalRef = this.modalService.open(ModifyEventComponent, { size: 'lg' });
    modalRef.componentInstance.event = this.event;
  }

  onFileChanged(event) {
    let uploadData = new FormData();
    uploadData.append('image', event.target.files[0]);
    this.eventService.sendPhoto(uploadData)
      .subscribe(resp => this.event.pictureId = resp.picture.id,
        error => alert('Nem megfelelő formátumú a kép.'));
  }

  subscribeEvent(){
    this.loading = true;
    if (this.event.registeredForEvent) {
      this.eventService.leaveEvent(this.event.id);
    } else {
      this.eventService.joinEvent(this.event.id);
    }
  }

  sendMessage(){
    this.eventService.sendMessageToEvent(this.event.id, this.comments);
  }
}
