import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { MaterialModule } from './ng-material.module';
import { AppRoutingModule } from '../modules/app-routing.module';
import { MenuModule } from '../modules/menu.module';

//Components
import { RecordsComponent } from '../components/records/records.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule,
    MenuModule
  ],
  declarations: [
    RecordsComponent
  ],
  exports: [
    RecordsComponent
  ]
})
export class RecordsModule { }
