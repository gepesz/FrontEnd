import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { LoginServiceService } from 'src/app/service/login-service.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-log-in-modal',
  templateUrl: './log-in-modal.component.html',
  styleUrls: ['./log-in-modal.component.scss']
})
export class LogInModalComponent implements OnInit {

  loginForm: FormGroup;
  submitted = false;
  error = '';

  constructor(public activeModal: NgbActiveModal, private formBuilder: FormBuilder, private loginService: LoginServiceService,
    private router: Router) {  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.loginForm.invalid) {
      return;
    }
  
    this.loginService.logIn(this.loginForm.value.name, this.loginForm.value.password)
      .subscribe(
        resp => {this.router.navigateByUrl("/home"), this.activeModal.close(), this.loginService.getLogIn()}, 
        error => this.error = error);
  }

  close() {
    this.activeModal.close();
  }
}
