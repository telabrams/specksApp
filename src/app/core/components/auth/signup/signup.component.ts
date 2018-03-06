import { Component, OnInit } from '@angular/core';

//Form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Services
import { UserService } from '../../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private us: UserService
  ) {
    this.form = fb.group({
      password: [null, Validators.required],
      email: [null, Validators.required],
      name: [null, Validators.required]
    })
  }

  ngOnInit() {
  }

  formSubmitted(): void {
    console.log(this.form.valid)
    if (this.form.valid) {
      console.log('valid')
      this.us.createUser(this.form.value.email, this.form.value.password, this.form.value.name)
    }
  }

}
