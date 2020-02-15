import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../interfaces/event';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModifyEventComponent } from '../modify-event/modify-event.component';

@Component({
  selector: 'div[app-event-card]',
  templateUrl: './event-card.component.html',
  styleUrls: ['./event-card.component.scss']
})
export class EventCardComponent implements OnInit {

  public isCollapsed = true;

  @Input()
  event: Event;

  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  modifyEvent(){
    this.modalService.open(ModifyEventComponent);
  }


}
