import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from '@angular/router';
import {environment} from '../../../environments/environment';
import {AuthenticationService} from './authentication.service';

@Injectable()
export class AuthGuard implements CanActivate {

    constructor(private router: Router, private authService: AuthenticationService) {
    }

    public canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/dashboard/login'])
                .then(function () {
                    if (!environment.production) console.log('Redirection successful');
                })
                .catch(function () {
                    if (!environment.production) console.log('Redirection failed');
                });
            return false;
        } return true;
    }
}
