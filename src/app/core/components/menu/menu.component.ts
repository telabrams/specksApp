import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private as: AuthService
  ) {}

  ngOnInit() {
  }

  logout() {
    this.as.logoutUser()
      .subscribe(data => {
        console.log(data);
      })
  }

}
