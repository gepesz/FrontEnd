import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '../../interfaces/event';
import { EventService } from '../../service/event.service';
import { CategoryService } from 'src/app/service/category.service';
import { Category } from 'src/app/interfaces/category';

@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.scss']
})
export class ModifyEventComponent implements OnInit {

  event: Event;
  form: FormGroup;
  categories: Category[];

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, private eventService: EventService,
    private catService: CategoryService) { }

  ngOnInit() {
    this.createForm();
    this.catService.getCategories().subscribe(cats => {
      this.categories = cats;
    });
  }

  private createForm() {
    this.form = this.fb.group({
      title: this.fb.control(this.event.title),
      describe: this.fb.control(this.event.description),
      date: this.fb.control(this.event.eventStartDate),
      min: this.fb.control(this.event.minNumberOfPeople),
      max: this.fb.control(this.event.maxNumberOfPeople),
      price: this.fb.control(this.event.price),
      category: this.fb.control(this.event.categoryName)
    });
  }

  submit() {
    this.eventService.modifyEvent(this.event.id, this.form.value);
    this.activeModal.close();
  }
}
