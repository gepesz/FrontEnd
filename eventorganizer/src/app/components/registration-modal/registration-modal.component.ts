import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  registration() {

  }

  close() {
    this.activeModal.close();
  }

}
