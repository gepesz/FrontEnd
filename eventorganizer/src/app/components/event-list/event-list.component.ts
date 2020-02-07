import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Subscription } from 'rxjs';
import { Event } from '../../interfaces/event';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {

  events: Event[];
  eventSubscription: Subscription;

  constructor(private eventService: EventService) {
    this.events = [];
  }

  ngOnInit() {
    this.eventSubscription = this.eventService.getEvents().subscribe(
      events => {
        console.log(`events.length: ${events.length}`)
        this.events = events;
      }
    )
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }

}
