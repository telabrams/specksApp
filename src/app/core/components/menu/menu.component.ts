import { Component, OnInit } from '@angular/core';

//Services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor(
    private us: UserService
  ) {}

  ngOnInit() {
  }

  logout(): void {
    this.us.logoutUser();
  }

}
