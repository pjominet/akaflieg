import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {environment} from '../../../environments/environment';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        if (localStorage.getItem('currentUser')) {
            // logged in so return true
            return true;
        }

        // not logged in so redirect to login page with the return url
        this.router.navigate(['/dashboard/login'])
            .then(function () {
                if (!environment.production) {
                    console.log('Redirection successful');
                }
            })
            .catch(function () {
                if (!environment.production) {
                    console.log('Redirection failed');
                }
            });
        return false;
    }
}
