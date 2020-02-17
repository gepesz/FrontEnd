import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventResponse } from '../interfaces/event-response';
import { Event } from '../interfaces/event';
import { environment } from 'src/environments/environment';
import { Filter } from '../interfaces/filter';
import { map } from 'rxjs/operators';


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

  getEventsByFilter(filter : Filter): Observable<Event[]> {
    const f = {
      eventTitle : filter.eventTitle,
      categoryId: + filter.categoryId,
      startDate: filter.startDate,
      endDate: filter.endDate,
    };
    return this.http.post<EventResponse>(this.SERVER_URL + "/filterevent",
      f,
      { withCredentials: true }
    )
    .pipe( map( resp => resp.events ) );
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

  public modifyEvent(id: number, e: Event): void {
    this.http.patch<EventResponse>(
      this.SERVER_URL + '/events/modify/' + id,
      { event: e },
      { withCredentials: true }
    ).subscribe(resp => this.updateEvent(resp));
  }

}
