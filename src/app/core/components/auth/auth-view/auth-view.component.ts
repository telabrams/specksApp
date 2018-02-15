import { Component, OnInit } from '@angular/core';

//Services
import { AuthService } from '../../../services/auth.service';

@Component({
  selector: 'app-auth-view',
  templateUrl: './auth-view.component.html',
  styleUrls: ['./auth-view.component.scss']
})
export class AuthViewComponent implements OnInit {

  constructor(
    private as: AuthService
  ) { }

  ngOnInit() {
  }

}
