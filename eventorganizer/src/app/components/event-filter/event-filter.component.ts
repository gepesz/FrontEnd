import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from '../../interfaces/event';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss']
})
export class EventFilterComponent implements OnInit {


  events: Event[];

  saveEventTitle: string;
  startDate : Date;
  endDate : Date;
  categoryId: number;

  constructor(private eventService: EventService) {
    this.events = [];
  }

  ngOnInit() {
    
  }
  
  onSearch(getEventTitle?: string, getStartDate?: Date, getEndDate?: Date, getCategoryId?: number){
    this.eventService.getEventsByFilter(getEventTitle,getStartDate,getEndDate,getCategoryId).subscribe(resp => this.events = resp)
    console.log(this.events)
  }
}
