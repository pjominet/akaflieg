import {Component, OnInit} from '@angular/core';
declare let $: any;

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    private togglePrivacy: boolean = false;
    private toggleTerms: boolean = false;

    constructor() {}

    ngOnInit(): void {
        /* ---- jQuery-Bootstrap Features ---- */
        $(document).ready(function () {
            // create navbar when scrolling, even on view change
            $('#mainNav').affix({
                offset: {
                    top: 300
                }
            });
        });
    }

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
