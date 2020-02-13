import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-logout-success-modal',
  templateUrl: './logout-success-modal.component.html',
  styleUrls: ['./logout-success-modal.component.scss']
})
export class LogoutSuccessModalComponent implements OnInit {

  constructor(public activeModal: NgbActiveModal) { }

  ngOnInit() {
  }

  close(){
    this.activeModal.close();
  }
}
