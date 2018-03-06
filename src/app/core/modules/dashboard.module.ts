import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { MaterialModule } from './ng-material.module';
import { MenuModule } from '../modules/menu.module';
import { AppRoutingModule } from '../modules/app-routing.module';

// Sevices

//Components
import { DashboardComponent } from '../components/dashboard/dashboard.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    MenuModule,
    AppRoutingModule
  ],
  declarations: [
    DashboardComponent
  ],
  exports: [
    DashboardComponent
  ],
  providers: [
  ]
})
export class DashboardModule { }
