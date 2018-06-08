import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../../helpers/auth/authentication.service';
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
    public loginForm: FormGroup;
    public submitted = false;
    public loading = false;
    private redirectUrl: string;

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
    get f() {
        return this.loginForm.controls;
    }

    public login() {
        this.submitted = true;
        // stop here if form is invalid
        if (this.loginForm.invalid) return;

        this.loading = true;
        this.authService.login(this.f.username.value, this.f.password.value)
            .pipe(first()).subscribe(
            success => {
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
                if (error.status === 403)
                    this.alertService.error('Zugang verweigert! Benutzername oder Passwort falsch');
                if (error.status === 0)
                    this.alertService.error('Unbekannter Fehler, Server womöglich nicht erreichbar');
                if (!environment.production)
                    console.log(error);
                this.loading = false;
            });
    }
}
