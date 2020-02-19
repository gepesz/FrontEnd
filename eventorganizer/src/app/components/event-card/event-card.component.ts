import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../interfaces/event';
import { NgbModal, NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { ModifyEventComponent } from '../modify-event/modify-event.component';

@Component({
  selector: 'div[app-event-card]',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {
  
  @Input()
  event: Event;

  constructor(private modalService: NgbModal,private config: NgbRatingConfig) { 
    config.max = 5;
    config.readonly = true;
  }

  ngOnInit() {
    this.event
  }

  modifyEvent(): void{
    const modalRef = this.modalService.open(ModifyEventComponent, { size: 'lg' });
    modalRef.componentInstance.event = this.event;
  }
}
