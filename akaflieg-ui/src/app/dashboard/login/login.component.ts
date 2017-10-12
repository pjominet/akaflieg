import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../helpers/authentification/authentification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../../helpers/alert/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    stayLoggedIn: boolean;
    returnUrl: string;

    constructor(private route: ActivatedRoute,
                private router: Router,
                private authenticationService: AuthenticationService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        // login if stay logged in is checked
        if (this.stayLoggedIn) {
            this.authenticationService.login(this.model.username, this.model.password);
        }

        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters
        this.returnUrl = this.route.snapshot.queryParams['/401'];
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    persistentLogInChanged() {
        return !this.stayLoggedIn
    }
}
