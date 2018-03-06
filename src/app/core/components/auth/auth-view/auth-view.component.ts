import { Component, OnInit } from '@angular/core';

// Services
import { UserService } from '../../../services/user.service';

// Rxjs
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})
export class AuthViewComponent implements OnInit {
  isAuth: Observable<string>;

  constructor(
    private us: UserService
  ) {
    this.isAuth = this.us.isUserAuth();
  }

  ngOnInit() {
  }

}
