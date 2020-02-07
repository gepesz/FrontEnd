import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventResponse } from '../interfaces/event-response';
import { Event } from '../interfaces/event';


@Injectable({
  providedIn: 'root'
})

export class EventService {

  private events: BehaviorSubject<Event[]>;
  private readonly GETEVENTS_URL = 'http://192.168.1.53:8080/events';
  private readonly GETFILTEREDEVENTS_URL = 'http://192.168.1.53:8080/eventsfilter';

  constructor(private http: HttpClient) {
    this.events = new BehaviorSubject([]);
  }

  getEvents(): BehaviorSubject<Event[]> {
    this.http.get<EventResponse>(this.GETEVENTS_URL, { withCredentials: true })
      .subscribe(resp => {
        this.updateEvent(resp);
      });
    return this.events;
  }

  getEventsByFilter(): BehaviorSubject<Event[]> {
    this.http.post<EventResponse>(this.GETFILTEREDEVENTS_URL, { withCredentials: true })
      .subscribe(resp => {
        this.updateEvent(resp);
      });
    return this.events;
  }

  private updateEvent(response: EventResponse) {
    if (response.success) {
      this.events.next(response.events);
    }
  }

}
