import { Component, OnInit } from '@angular/core';

//Form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

// Services
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private us: UserService
  ) {
    this.form = fb.group({
      name: [null, Validators.required]
    })
    this.us.getUserName().subscribe(name => {
      this.form.controls['name'].setValue(name);
    })
  }

  formSubmitted(): void {
    this.us.setUserName(this.form.value.name);
  }

}
