import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { MaterialModule } from './ng-material.module';
import { AppRoutingModule } from '../modules/app-routing.module';

//Components
import { PlayComponent } from '../components/play/play.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    PlayComponent
  ],
  exports: [
    PlayComponent
  ]
})
export class PlayModule { }
