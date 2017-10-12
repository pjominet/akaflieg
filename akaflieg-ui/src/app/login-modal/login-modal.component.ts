import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentification/authentification.service';
import {ActivatedRoute, Router} from '@angular/router';
import {AlertService} from '../helpers/alert/alert.service';

@Component({
    selector: 'app-login-modal',
    templateUrl: './login-modal.component.html',
    styleUrls: ['./login-modal.component.scss']
})
export class LoginModalComponent implements OnInit {
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

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['./dashboard/weather'] || '/';
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
