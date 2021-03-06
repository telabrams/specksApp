import { CanActivate, Router } from '@angular/router';
import { AngularFireAuth } from "angularfire2/auth";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Rx";
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/take';

@Injectable()
export class AuthGuardService implements CanActivate {

    constructor(private fa: AngularFireAuth, private router: Router) {}

    canActivate(): Observable<boolean> | Promise<boolean> | boolean {
      return this.fa.authState
        .take(1)
        .map(state => !!state)
        .do(authenticated => {
          !authenticated && this.router.navigate([ '/auth/signin' ]);
        })
    }

}
