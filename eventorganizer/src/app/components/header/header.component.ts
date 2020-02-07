import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogInModalComponent } from '../log-in-modal/log-in-modal.component';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  
  constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  getRegistration() {
    this.modalService.open(RegistrationModalComponent);
  }

  getLogIn() {
    this.modalService.open(LogInModalComponent);
  }

}
