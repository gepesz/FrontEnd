import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { EventResponse } from '../interfaces/event-response';
import { Event } from '../interfaces/event';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MainSiteEventsService {

  private events: BehaviorSubject<Event[]>;
  private readonly SERVER_URL = environment.serverUrl + "/home"

  constructor(private http: HttpClient) { 
    this.events = new BehaviorSubject([])
  }

  getEvents(): BehaviorSubject<Event[]> {
    this.http.get<EventResponse>(this.SERVER_URL, {withCredentials: true})
      .subscribe(resp => {this.updateEvents(resp);});
    return this.events;
  }

  updateEvents(response: EventResponse) {
    if(response.success){
      this.events.next(response.events);
    }
  }


}
