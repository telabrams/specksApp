import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { MaterialModule } from './ng-material.module';
import { AppRoutingModule } from '../modules/app-routing.module';
import { MomentModule } from 'angular2-moment';

//Components
import { PlayComponent } from '../components/play/play.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    MomentModule
  ],
  declarations: [
    PlayComponent
  ],
  exports: [
    PlayComponent
  ]
})
export class PlayModule { }
