import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

//Services
import { ToastrService } from 'ngx-toastr';

//Rxjs
import { Observable } from 'rxjs/Observable';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireDatabase } from 'angularfire2/database';
import { environment } from '../../../environments/environment';

@Injectable()
export class AuthService {

  constructor(
    private fa: AngularFireAuth,
    private fdb: AngularFireDatabase,
    private router: Router,
    private toastr: ToastrService
  ) {
    this.isAuth();
  }

  //Check if user is auth
  private isAuth() {
    this.fa.authState.subscribe(auth => {
      console.log(auth);
      if(auth) {
        this.router.navigate(['/menu']);
      }
    });
  }

  //Save user token to localstorage
  private setUserToken(): void {
    this.fa.auth.currentUser.getIdToken()
      .then(token => {
        localStorage.setItem('userToken:specksApp', token);
      })
      .catch(err => err)
  }

  //Get user token from localstorage
  private getUserToken(): void {
    localStorage.getItem('userToken:specksApp');
    console.log(localStorage.getItem('userToken:specksApp'));
  }

  //Signout user
  logoutUser(): Observable<any> {
    return Observable.fromPromise(
      this.fa.auth.signOut()
        .then(success => {
          console.log(success)
          this.toastr.success(`You are successfuly logout`);
          this.router.navigate(['/auth/signin'])
        }).catch(err => {
          console.log(err)
          this.toastr.error(err);
        })
    )
  }

  //Signin user
  loginUser(email: string, password: string): Observable<any> {
    return Observable.fromPromise(
      this.fa.auth.signInWithEmailAndPassword(email, password)
        .then(success => {
          this.setUserToken();
          this.toastr.success(`Hello ${success.email}`);
          this.router.navigate(['/menu'])
        })
        .catch(err => {
          this.toastr.error(err);
        })
    )
  }

  //Create new user
  createUser(email: string, password: string): Observable<any>  {
    return Observable.fromPromise(
      this.fa.auth.createUserWithEmailAndPassword(email, password)
        .then(success => {
          this.toastr.success(`You are successfuly registered ${success.email}`);
          this.router.navigate(['/menu'])
        })
        .catch(err => {
          this.toastr.error(err);
        })
    )
  }
}
