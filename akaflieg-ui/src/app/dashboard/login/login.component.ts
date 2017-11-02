import {Component, OnInit} from '@angular/core';
import {LoginService} from './login.service';
import {Router} from '@angular/router';
import {AlertService} from '../../helpers/alert/alert.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(private router: Router,
                private authenticationService: LoginService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();
    }

    public login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                result => {
                    if (result === true) {
                        this.router.navigate(['/dashboard/cms'])
                            .then(function () {
                                console.log('Redirection successful');
                            })
                            .catch(function () {
                                console.log('Redirection failed');
                            });
                    } else {
                        this.alertService.error('Benutzername oder Passwort falsch');
                        this.loading = false;
                    }
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }
}
