import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { LogInModalComponent } from '../log-in-modal/log-in-modal.component';
import { RegistrationModalComponent } from '../registration-modal/registration-modal.component';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isLoggedIn$: Observable<boolean>; 
  
  constructor(private modalService: NgbModal, private loginService: LoginServiceService, public router: Router) { }

  ngOnInit() {
    this.isLoggedIn$ = this.loginService.isLoggedIn;
  }

  getRegistration() {
    this.modalService.open(RegistrationModalComponent);
  }

  getLogIn() {
    this.modalService.open(LogInModalComponent);
  }

  onLogout(){
    this.loginService.logout();
  }

}
