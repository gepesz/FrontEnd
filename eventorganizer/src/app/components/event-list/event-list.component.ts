import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventService } from '../../service/event.service';
import { Subscription, Observable } from 'rxjs';
import { Event } from '../../interfaces/event';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/service/login-service.service';


@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.scss']
})
export class EventListComponent implements OnInit, OnDestroy {

  events: Event[];
  eventSubscription: Subscription;
  isLoggedIn$: Observable<boolean>; 

  constructor(private eventService: EventService, public router: Router, private loginService: LoginServiceService,) {
    this.events = [];
  }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
    this.eventSubscription = this.eventService.getEvents().subscribe(
      events => {this.events = events}
    )
  }

  ngOnDestroy() {
    this.eventSubscription.unsubscribe();
  }
}
