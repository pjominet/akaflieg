import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {first} from 'rxjs/operators';
import {AlertService} from '../../helpers/alert/alert.service';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    submitted = false;
    loading = false;

    constructor(private router: Router,
                private authService: AuthenticationService,
                private alertService: AlertService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // pass-through if login session is not yet expired
        if (this.authService.isAuthenticated())
            this.router.navigate(['/dashboard/cms'])
                .then(function () {
                    if (!environment.production)
                        console.log('Redirection successful');
                })
                .catch(function () {
                    if (!environment.production)
                        console.log('Redirection failed');
                });
        else {
            if (!environment.production)
                console.log('No pass-through authentication');
            this.authService.logout();
        }
    }

    // convenience getter for easy access to form fields
    get form() {
        return this.loginForm.controls;
    }

    public login() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) return;

        this.loading = true;
        this.authService.login(this.form.username.value, this.form.password.value)
            .pipe(first()).subscribe(
            success => {
                this.router.navigate(['/dashboard/cms'])
                    .then(function () {
                        if (!environment.production)
                            console.log('Redirection successful');
                    })
                    .catch(function () {
                        if (!environment.production)
                            console.log('Redirection failed');
                    });
            },
            error => {
                this.alertService.error(error);
                this.loading = false;
            });
    }
}
