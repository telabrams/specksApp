import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { MaterialModule } from './ng-material.module';
import { AppRoutingModule } from '../modules/app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Components
import { ProfileComponent } from '../components/profile/profile.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ProfileComponent
  ],
  exports: [
    ProfileComponent
  ]
})
export class ProfileModule { }
