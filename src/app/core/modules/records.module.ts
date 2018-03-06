import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { MaterialModule } from './ng-material.module';
import { AppRoutingModule } from '../modules/app-routing.module';

//Components
import { RecordsComponent } from '../components/records/records.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
  ],
  declarations: [
    RecordsComponent
  ],
  exports: [
    RecordsComponent
  ]
})
export class RecordsModule { }
