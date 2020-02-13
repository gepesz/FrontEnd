import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { NewEvent } from '../interfaces/new-event';  
import { NewEventResponse } from '../interfaces/new-event-response';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class NewEventService {

  private readonly SERVER_URL = environment.serverUrl + "/events/create";
  private events: BehaviorSubject<NewEvent[]>;

  constructor(private http: HttpClient) { 
    //this.events = new BehaviorSubject([]);
  }

  addEvent(e: NewEvent): void{
    this.http.post<NewEventResponse>(
      this.SERVER_URL,
      e,
      { withCredentials: true }
    ).subscribe(resp => this.updateEvents(resp));

  }

  private updateEvents(response: NewEventResponse) {
    if (response.success) {
      this.events.next(response.events);
    }
  }
}
