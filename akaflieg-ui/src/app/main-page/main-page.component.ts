import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    private togglePrivacy: boolean = false;
    private toggleTerms: boolean = false;

    constructor() {}

    ngOnInit(): void {}

    togglePrivacyExtension() {
        this.toggleTerms = false;
        this.togglePrivacy = !this.togglePrivacy;
        return !this.togglePrivacy;
    }

    toggleTermsExtension() {
        this.togglePrivacy = false;
        this.toggleTerms = !this.toggleTerms;
        return !this.toggleTerms;
    }
}
