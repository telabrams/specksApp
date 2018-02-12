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
import { MenuComponent } from './core/components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    ToastrModule.forRoot(),
    AppRoutingModule,
    AuthModule,
    FirebaseModule
  ],
  exports: [
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
