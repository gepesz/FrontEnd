import { Component, OnInit, Input } from '@angular/core';
import { Event } from '../../interfaces/event';
import { MainSiteEventsService } from '../../service/main-site-events.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-main-site',
  templateUrl: './main-site.component.html',
  styleUrls: ['./main-site.component.scss']
})
export class MainSiteComponent implements OnInit {

  events: Event[]; //3 elemű tömbre lesz szükség
  eventSubscription: Subscription;

  constructor(private eventService: MainSiteEventsService) { 
    this.events = [];
  }

  ngOnInit() {
    this.eventSubscription = this.eventService.getEvents().subscribe(
      events => {
        this.events = events;
      }
    )
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }

}
