import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewEventService } from 'src/app/service/new-event.service';
import { NewEvent } from '../../interfaces/new-event';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Constants } from 'src/app/interfaces/constants';
import { Category } from 'src/app/interfaces/category';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  event: NewEvent;
  private readonly SERVER_URL = Constants.hostName + "/categories";
  categories: Category[];

  constructor(public router: Router, private eventService: NewEventService, private http: HttpClient) { 
    this.event = {
      title: "",
      description: "",
      eventStartDate: null,
      price: null,
      minNumberOfPeople: null,
      maxNumberOfPeople: null,
      category: null
    };
  }

  ngOnInit() {
    this.http.get<any>(this.SERVER_URL).subscribe( cats => this.categories = cats.categories );
  }

  saveEvent(): void{
    if (typeof this.event.category !== 'object') {
      this.event.category = { id: + this.event.category, title : this.categories.find( c => c.id == this.event.category ).title };
    }
    this.eventService.addEvent(this.event);
  }

  goBack() {
    this.router.navigateByUrl("/event-list")
  }

}
