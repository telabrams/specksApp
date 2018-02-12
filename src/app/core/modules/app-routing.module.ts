import { NgModule } from '@angular/core';

//Modules
import { Routes, RouterModule } from "@angular/router";

//Components
import { AuthViewComponent } from '../components/auth/auth-view/auth-view.component';
import { SigninComponent } from '../components/auth/signin/signin.component';
import { SignupComponent } from '../components/auth/signup/signup.component';
import { MenuComponent } from '../components/menu/menu.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full'},
  { path: 'auth', component: AuthViewComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: 'menu', component: MenuComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
