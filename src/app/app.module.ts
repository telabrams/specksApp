//Angular modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';

//3-rd part modules
import { ToastrModule } from 'ngx-toastr';

// Custom modules
import { AppRoutingModule } from './core/modules/app-routing.module';
import { AuthModule } from './core/modules/auth.module';
import { FirebaseModule } from './core/modules/firebase.module';
import { MenuModule } from './core/modules/menu.module';
import { PlayModule } from './core/modules/play.module';
import { RecordsModule } from './core/modules/records.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    FirebaseModule,
    MenuModule,
    PlayModule,
    RecordsModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
