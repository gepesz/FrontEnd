import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../interfaces/event';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModifyEventComponent } from '../modify-event/modify-event.component';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'div[app-event-card]',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  private environment = environment;
  text: string = 'Feliratkozás';
  toggle = true;
   

  @Input()
  event: Event;

  constructor(private modalService: NgbModal, private router: Router, private eventService: EventService,private rating: NgbRatingConfig) { 
    rating.max = 5;
    rating.readonly = true;
  }

  ngOnInit() {
    this.event.pictureId;
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

  public subscribeEvent(): void {
    this.toggle = !this.toggle;
    if (this.text === 'Feliratkozás') {
      this.eventService.joinEvent(this.event.id);
      this.text = 'Leiratkozás'
    } else {
      this.eventService.leaveEvent(this.event.id);
      this.text = 'Feliratkozás'
    }
  }
}
