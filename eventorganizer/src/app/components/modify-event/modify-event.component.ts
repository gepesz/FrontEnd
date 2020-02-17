import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { Event } from '../../interfaces/event';
import { EventService } from '../../service/event.service';

@Component({
  selector: 'app-modify-event',
  templateUrl: './modify-event.component.html',
  styleUrls: ['./modify-event.component.scss']
})
export class ModifyEventComponent implements OnInit {

  event: Event;
  form: FormGroup;

  constructor(private fb: FormBuilder, public activeModal: NgbActiveModal, private eventService: EventService) { }

  ngOnInit() {
    this.createForm();
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

  submit(): boolean {
    if (this.form.valid) {
      this.eventService.modifyEvent(this.event.id, this.form.value);
      this.activeModal.close();
    } else {
      return false;
    }
  }
}
