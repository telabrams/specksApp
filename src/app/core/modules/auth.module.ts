import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { MaterialModule } from '../modules/ng-material.module';
import { MatButtonModule } from '@angular/material/button';
import { AppRoutingModule } from '../modules/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Services
import { AuthService } from '../services/auth.service';

//Componets
import { AuthViewComponent } from '../components/auth/auth-view/auth-view.component';
import { SigninComponent } from '../components/auth/signin/signin.component';
import { SignupComponent } from '../components/auth/signup/signup.component';

@NgModule({
  imports: [
    CommonModule,
    AppRoutingModule,
    MatButtonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    AuthViewComponent,
    SigninComponent,
    SignupComponent
  ],
  exports: [
    AuthViewComponent,
    SigninComponent,
    SignupComponent
  ],
  providers: [
    AuthService
  ]
})
export class AuthModule { }
