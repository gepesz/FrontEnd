import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/interfaces/user';
import { environment } from 'src/environments/environment';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-image',
  templateUrl: './user-image.component.html',
  styleUrls: ['./user-image.component.scss']
})
export class UserImageComponent implements OnInit {

  public environment = environment
  @Input()
  user: User;

  constructor(private userService: UserService,public router: Router) { }

  ngOnInit() {
    this.user.pictureId;
  }

  onFileChanged(event) {
    let uploadData = new FormData();
    uploadData.append('image', event.target.files[0]);
    this.userService.sendPhoto(uploadData)
      .subscribe(resp => this.user.pictureId = resp.picture.id,
                error => alert('Nem megfelelő formátumú a kép.'));
  }
}
