import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        // login successful
        if (localStorage.getItem('currentUser')) return true;

        // not logged in so redirect to login page with the redirect url
        this.router.navigate(['/dashboard/login'], {queryParams: {redirectUrl: state.url}})
            .then(function () {
                if (!environment.production) console.log('Redirection successful');
            })
            .catch(function () {
                if (!environment.production) console.log('Redirection failed');
            });
        return false;
    }
}
