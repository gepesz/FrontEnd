import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { EventService } from 'src/app/service/event.service';
import { Subscription } from 'rxjs';
import { Event } from 'src/app/interfaces/event';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {


  public isCollapsed = true;
  myEvent: Event[];
  eventSubscription: Subscription;

  @Input()
  user: User;


  constructor(private userService: UserService, private router: Router, private http: HttpClient, private eventservice: EventService) {
    this.user = {
      username: '',
    }
    this.myEvent = []
  }

  getEvents() {
    this.eventSubscription = this.eventservice.getMyEvents(this.user.id)
      .subscribe(events => this.myEvent = events)
  }

  ngOnInit() {
    this.myEvent
  }

  ngOnDestroy(){
    this.eventservice;
  }
}
