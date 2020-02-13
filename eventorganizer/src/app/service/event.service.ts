import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventResponse } from '../interfaces/event-response';
import { Event } from '../interfaces/event';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})

export class EventService {

  private events: BehaviorSubject<Event[]>;
  private readonly SERVER_URL = environment.serverUrl;
  constructor(private http: HttpClient) {
    this.events = new BehaviorSubject([]);
  }

  getEvents(): BehaviorSubject<Event[]> {
    this.http.get<EventResponse>(this.SERVER_URL + "/events", { withCredentials: true })
      .subscribe(resp => {
        this.updateEvent(resp);
      });
    return this.events;
  }

  getEventsByFilter(): BehaviorSubject<Event[]> {
    this.http.post<EventResponse>(this.SERVER_URL + "/eventsfilter", { withCredentials: true })
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

  getMyEvents(id: number): BehaviorSubject<Event[]> {
    this.http.get<EventResponse>(this.SERVER_URL + '/myevents/' + id, { withCredentials: true })
      .subscribe(resp => {
        this.updateEvent(resp);
      });
    return this.events;
  }

}
