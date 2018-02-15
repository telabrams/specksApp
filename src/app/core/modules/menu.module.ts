import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//Modules
import { MaterialModule } from './ng-material.module';
import { AppRoutingModule } from '../modules/app-routing.module';

//Components
import { MenuComponent } from '../components/menu/menu.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    AppRoutingModule
  ],
  declarations: [
    MenuComponent
  ],
  exports: [
    MenuComponent
  ]
})
export class MenuModule { }
