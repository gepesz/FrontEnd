import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MainSiteEventsService {

  private events: Observable<Event[]>;
  private readonly SERVER_URL = "http://192.168.1.53:8080/events"

  constructor(private http: HttpClient) { 

  }

  getEvents(): Observable<Event[]> {

    
    return null;
  }


}
