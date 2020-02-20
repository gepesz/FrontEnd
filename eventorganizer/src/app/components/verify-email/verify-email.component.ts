import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Verify } from 'src/app/interfaces/verify';
import { UserService } from 'src/app/service/user.service';


@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {
  public verifyCompleted :boolean;
  private verify: Verify;
  constructor(private route: ActivatedRoute,private userService: UserService) { 
    this.verify = {
      id: 0,
      token: ''
    }
  }

  ngOnInit() {
    this.route.paramMap.subscribe(route => {
      this.verify.id = +route.get('id');
      this.verify.token = route.get('token');
      this.userService.verifyEmail(this.verify).subscribe(success => this.verifyCompleted = true,
        error => this.verifyCompleted = false)
    });
  }
}
