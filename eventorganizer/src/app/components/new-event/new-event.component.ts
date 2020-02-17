import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewEventService } from 'src/app/service/new-event.service';
import { NewEvent } from '../../interfaces/new-event';
import { Category } from 'src/app/interfaces/category';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CategoryService } from 'src/app/service/category.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-new-event',
  templateUrl: './new-event.component.html',
  styleUrls: ['./new-event.component.scss']
})
export class NewEventComponent implements OnInit {

  event: NewEvent;
  private readonly SERVER_URL = environment.serverUrl + "/categories";
  categories: Category[];
  textShow: boolean;
  categorySubscription: Subscription;

  constructor(public router: Router, private eventService: NewEventService, private http: HttpClient, 
    private catService: CategoryService) { 
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
    this.catService.getCategories().subscribe( cats => {
      this.categories = cats;
    });
  }

  saveEvent(): void{
    if (typeof this.event.category !== 'object') {
      this.event.category = { id: + this.event.category, title : this.categories.find( c => c.id == this.event.category ).title };
    }
    this.eventService.addEvent(this.event);
    this.textShow = true;
    window.scroll(0,0);
  }

  goBack() {
    this.router.navigateByUrl("/event-list")
  }

}
