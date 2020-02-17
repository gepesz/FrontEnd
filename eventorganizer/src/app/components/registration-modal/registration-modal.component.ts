import { Component, OnInit } from '@angular/core';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../_password-validator/must-match.validator';
import { UserService } from 'src/app/service/user.service';
import { first } from 'rxjs/operators';

@Component({
  selector: 'app-registration-modal',
  templateUrl: './registration-modal.component.html',
  styleUrls: ['./registration-modal.component.scss']
})
export class RegistrationModalComponent implements OnInit {

  registerForm: FormGroup;
  submitted = false;
  loading = false;
  registrationSuccess = false;

  constructor(private formBuilder: FormBuilder,
    public activeModal: NgbActiveModal,
    private userService: UserService
  ) { 
    this.activeModal = activeModal
  }

  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required]
    }, {
      validator: MustMatch('password', 'confirmPassword')
    });
  }

  get f() { return this.registerForm.controls; }

  onSubmit() {
    this.submitted = true;
    if (this.registerForm.invalid) {
      return;
    }

    this.loading = true;

    this.userService
      .register(this.registerForm.value)
        .pipe(first())
          .subscribe(data => { this.registrationSuccess = true ,setTimeout(function(){this.close()},2000)},
                    error => { alert(error)});
  }

  close():void {
    this.activeModal.close();
  }

}
