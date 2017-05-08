import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

    public togglePrivacy = false;
    public toggleTerms = false;

    constructor() {
    }

    ngOnInit() {
    }

    togglePrivacyExtension() {
        this.toggleTerms = false;
        this.togglePrivacy = !this.togglePrivacy;
        return false;
    }

    toggleTermsExtension() {
        this.togglePrivacy = false;
        this.toggleTerms = !this.toggleTerms;
        return false;
    }
}
