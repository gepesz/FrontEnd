import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { EventResponse } from '../interfaces/event-response';
import { Event } from '../interfaces/event';
<<<<<<< HEAD
import { Constants } from '../interfaces/constants';
=======
import { environment } from 'src/environments/environment';
>>>>>>> 710e8f04cbece9ce1f3f676bc317d4d1c858e589


@Injectable({
  providedIn: 'root'
})

export class EventService {

  private events: BehaviorSubject<Event[]>;
<<<<<<< HEAD
  private readonly GETEVENTS_URL = Constants.hostName +  "/events";
  private readonly GETFILTEREDEVENTS_URL = Constants.hostName +  "/eventsfilter";
=======
  private readonly SERVER_URL = environment.serverUrl;
  private readonly GETEVENTS_URL = environment.serverUrl + '/events';
  private readonly GETFILTEREDEVENTS_URL = environment.serverUrl + '/eventsfilter';
>>>>>>> 710e8f04cbece9ce1f3f676bc317d4d1c858e589

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

  getMyEvents(id:number): BehaviorSubject<Event[]> {
     this.http.get<EventResponse>(this.SERVER_URL + '/myevents/' + id, {withCredentials:true})
        .subscribe(resp => {
            this.updateEvent(resp);
        });
      return this.events;
  }

}
