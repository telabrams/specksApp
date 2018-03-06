import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

//Services
import { ToastrService } from 'ngx-toastr';

//Rxjs
import { Observable } from 'rxjs/Observable';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';

@Injectable()
export class AuthService {

  constructor(
    private fa: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) {}

  //Signout user
  logoutUser(): Observable<any> {
    return Observable.fromPromise(
      this.fa.auth.signOut()
        .then(success => {
          this.toastr.success(`You are successfuly logout`);
          this.router.navigate(['/auth/signin'])
        }).catch(err => {
          this.toastr.error(err);
        })
    )
  }

  //Signin user
  loginUser(email: string, password: string): Observable<any> {
    return Observable.fromPromise(
      this.fa.auth.signInWithEmailAndPassword(email, password)
        .then(success => {
          this.toastr.success(`Hello ${success.email}`);
          this.router.navigate(['/dashboard'])
        })
        .catch(err => {
          this.toastr.error(err);
        })
    )
  }

  //Create new user
  createUser(email: string, password: string, name: string): Observable<any>  {
    return Observable.fromPromise(
      this.fa.auth.createUserWithEmailAndPassword(email, password)
        .then(success => {
          this.toastr.success(`You are successfuly registered ${success.email}`);
          this.router.navigate(['/dashboard'])
        })
        .catch(err => {
          this.toastr.error(err);
        })
    )
  }
}
