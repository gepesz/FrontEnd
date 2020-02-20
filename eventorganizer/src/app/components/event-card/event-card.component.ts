import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Event } from '../../interfaces/event';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModifyEventComponent } from '../modify-event/modify-event.component';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventService } from '../../service/event.service';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { Comments } from 'src/app/interfaces/comments';

@Component({
  selector: 'div[app-event-card]',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  private environment = environment;
  isLoggedIn$: Observable<boolean>; 
  loading: boolean;
  setRatingSystem: boolean;
  selected = 0;
  comments: Comments;

  @Input()
  event: Event;
 

  constructor(private modalService: NgbModal, private eventService: EventService, public route: ActivatedRoute,
    private loginService: LoginServiceService, private rating: NgbRatingConfig) {
      this.loading = false;
      rating.max = 5;
      rating.readonly = true;
      this.setRatingSystem = false;
      this.comments = {};
    }


  ngOnInit() {
    this.event.pictureId;
    this.isLoggedIn$ = this.loginService.isLoggedIn;
  }

  modifyEvent(): void {
    const modalRef = this.modalService.open(ModifyEventComponent, { size: 'lg' });
    modalRef.componentInstance.event = this.event;
  }

  onFileChanged(event) {
    let uploadData = new FormData();
    uploadData.append('image', event.target.files[0]);
    uploadData.append('eventId', this.event.id.toString());
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

  swapRating():void {
    this.setRatingSystem == false ? this.setRatingSystem = true : this.setRatingSystem = false;
    this.rating.readonly == false ? this.rating.readonly = true : this.rating.readonly = false;
  }

  sendTheRate():void{
    this.eventService.sendRatingEvent(this.event.id,this.selected).subscribe(success => this.swapRating(),
      error => console.log(error));
  }
}
