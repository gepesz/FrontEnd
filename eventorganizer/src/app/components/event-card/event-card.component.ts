import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../interfaces/event';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModifyEventComponent } from '../modify-event/modify-event.component';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventService } from '../../service/event.service';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/service/login-service.service';

@Component({
  selector: 'div[app-event-card]',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  private environment = environment;
  text: string = 'Feliratkozás';
  isLoggedIn$: Observable<boolean>; 
  loading: boolean;

  @Input()
  event: Event;

  constructor(private modalService: NgbModal, private router: Router, private eventService: EventService,
    private loginService: LoginServiceService, private rating: NgbRatingConfig) {
      this.loading = false;
      rating.max = 5;
      rating.readonly = true;
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
    console.log(this.event);
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
    this.eventService.sendMessageToEvent(this.event.id, this.event.comments);
  }
}
