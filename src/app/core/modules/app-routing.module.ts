import { NgModule } from '@angular/core';

//Modules
import { Routes, RouterModule } from "@angular/router";

//Auth Guard
import { AuthGuardService } from '../services/auth-guard.service';

//Components
import { AuthViewComponent } from '../components/auth/auth-view/auth-view.component';
import { SigninComponent } from '../components/auth/signin/signin.component';
import { SignupComponent } from '../components/auth/signup/signup.component';
import { PlayComponent } from '../components/play/play.component';
import { RecordsComponent } from '../components/records/records.component';
import { DashboardComponent } from '../components/dashboard/dashboard.component';
import { ProfileComponent } from '../components/profile/profile.component';

const routes: Routes = [
  { path: '', redirectTo: 'auth/signin', pathMatch: 'full'},
  { path: 'auth', redirectTo: 'auth/signin' },
  { path: 'auth', component: AuthViewComponent,
    children: [
      { path: 'signin', component: SigninComponent },
      { path: 'signup', component: SignupComponent }
    ]
  },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuardService],
    children: [
      { path: 'play', component: PlayComponent, canActivate: [AuthGuardService] },
      { path: 'profile', component: ProfileComponent, canActivate: [AuthGuardService] },
      { path: 'records', component: RecordsComponent, canActivate: [AuthGuardService] }
    ]
  },
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
