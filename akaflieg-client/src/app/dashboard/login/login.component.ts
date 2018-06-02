import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from './authentication.service';
import {ActivatedRoute, Router} from '@angular/router';
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
    redirectUrl: string;

    constructor(private router: Router,
                private route: ActivatedRoute,
                private authService: AuthenticationService,
                private alertService: AlertService,
                private formBuilder: FormBuilder) {
    }

    ngOnInit() {
        this.loginForm = this.formBuilder.group({
            username: ['', Validators.required],
            password: ['', Validators.required]
        });

        // reset login status
        this.authService.logout();

        // get redirect url from route parameters or default to '/dashboard/cms'
        this.redirectUrl = this.route.snapshot.queryParams['redirectUrl'] || '/dashboard/cms';
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
                console.log(this.redirectUrl + ', token:' + localStorage.getItem('currentUser'));
                this.router.navigate([this.redirectUrl])
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
