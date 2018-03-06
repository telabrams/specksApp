import { Component, OnInit, HostBinding } from '@angular/core';

//Form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Services
import { UserService } from '../../../services/user.service'

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private us: UserService
  ) {
    this.form = fb.group({
      password: [null, Validators.required],
      email: [null, Validators.required]
    })
  }

  ngOnInit() {
    console.log(this.form);
  }

  formSubmitted(): void {
    console.log(this.form.valid)
    if (this.form.valid) {
      console.log('valid')
      this.us.loginUser(this.form.value.email, this.form.value.password);
    }
  }

}
