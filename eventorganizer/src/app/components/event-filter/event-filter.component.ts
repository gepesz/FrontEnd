import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { EventService } from 'src/app/service/event.service';
import { Event } from '../../interfaces/event';
import { Filter } from 'src/app/interfaces/filter';
import { Category } from 'src/app/interfaces/category';
import { CategoryService } from 'src/app/service/category.service';

@Component({
  selector: 'app-event-filter',
  templateUrl: './event-filter.component.html',
  styleUrls: ['./event-filter.component.scss']
})
export class EventFilterComponent implements OnInit {


  events: Event[];
  categories: Category[];

  filter: Filter;
  saveEventTitle: string;
  startDate : Date;
  endDate : Date;
  categoryId: number;
  @Output()
  search: EventEmitter<Filter>;

  constructor(private eventService: EventService, private categoryService: CategoryService) {
    this.events = [];
    const endDate = new Date();
    endDate.setMonth(endDate.getMonth() + 1);
    this.filter = {
      eventTitle : "",
      startDate : (new Date()).toISOString().replace(/T.*$/, ''),
      endDate : endDate.toISOString().replace(/T.*$/, ''),
      categoryId : 0,
    }
    this.search = new EventEmitter();
  }

  ngOnInit() {
    this.categoryService.getCategories().subscribe( categories => this.categories = categories );
  }
  
  onSearch(){
    this.search.emit(this.filter);
  }
}
