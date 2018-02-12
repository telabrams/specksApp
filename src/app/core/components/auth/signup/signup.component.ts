import { Component, OnInit } from '@angular/core';

//Form
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

//Services
import { AuthService } from '../../../services/auth.service'

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  form: FormGroup;

  constructor(
    private fb: FormBuilder,
    private auth: AuthService
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
      this.auth.createUser(this.form.value.email, this.form.value.password)
        .subscribe(data => {
          console.log(data);
        })
    }
  }

}
