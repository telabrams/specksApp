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
    this.fa.authState.subscribe(auth => {
      if(auth) {
        this.router.navigate(['/menu']);
      }
    });
  }

  loginUser(email: string, password: string): Observable<any> {
    return Observable.fromPromise(
      this.fa.auth.signInWithEmailAndPassword(email, password)
        .then(success => {
          this.toastr.success(`Hello ${success.email}`);
          this.router.navigate(['/menu'])
        })
        .catch(err => {
          this.toastr.error(err);
        })
    )
  }

  createUser(email: string, password: string): Observable<any>  {
    return Observable.fromPromise(
      this.fa.auth.createUserWithEmailAndPassword(email, password)
        .then(success => {
          this.toastr.success(`You are successfuly registered ${success.email}`);
          this.router.navigate(['/signin'])
        })
        .catch(err => {
          this.toastr.error(err);
        })
    )
  }
}
