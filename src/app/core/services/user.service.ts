import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams, HttpResponse } from '@angular/common/http';

//Services
import { ToastrService } from 'ngx-toastr';

//Rxjs
import { Observable } from 'rxjs/Observable';

//Firebase
import { AngularFireAuth } from 'angularfire2/auth';
import { environment } from '../../../environments/environment';

@Injectable()
export class UserService {
  private apiKey: string = environment.firebase.apiKey;
  private apiUrl: string = environment.api.apiUrl;
  private userId: string;

  constructor(
    private fa: AngularFireAuth,
    private router: Router,
    private toastr: ToastrService,
    private http: HttpClient
  ) {
  }

  //Get user name
  getUserName(): Observable<any> {
    return this.checkUserToken()
      .switchMap( token => {
        const HEADERS = new HttpHeaders({'USER_TOKEN': token})
        return this.http.get(`${this.apiUrl}/user_name`, { headers: HEADERS })
          .map(
            res => {
              return res;
            },
            err => {
              this.toastr.error(`${err.error}`);
            }
          )
      })
  }

  //Set user name
  setUserName(name: string): void {
    this.checkUserToken()
      .subscribe( token => {
        const HEADERS = new HttpHeaders({'USER_TOKEN': token}),
              BODY = { NAME: name };
        this.http.post(`${this.apiUrl}/users`, BODY, { headers: HEADERS })
          .subscribe(
            res => {
              this.toastr.success(`${res}`);
            },
            err => {
              this.toastr.error(`${err.error}`);
            }
          )
      })
  }

  //Get user id
  private getUserId(): Observable<string> {
    return this.fa.authState
      .map(auth => {
        return auth.uid;
      })
  }

  //Is user auth
  isUserAuth(): Observable<any> {
    return this.fa.authState
      .map(auth => {
        return auth ? true : false;
      })
  }

  //Check user token
  private checkUserToken(): Observable<any> {
    return Observable.fromPromise(
      this.fa.auth.currentUser.getIdToken()
    )
  }

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
          this.setUserName(name);
          this.router.navigate(['/dashboard']);
        })
        .catch(err => {
          this.toastr.error(err);
        })
    )
  }
}
