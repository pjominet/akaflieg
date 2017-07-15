import {Component, OnInit} from '@angular/core';
declare const $: any;

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    public hidePrivacy = true;
    public hideTerms = true;

    constructor() {
    }

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

    public togglePrivacyExtension(): void {
        this.hideTerms = true;
        this.hidePrivacy = !this.hidePrivacy;
    }

    public toggleTermsExtension(): void {
        this.hidePrivacy = true;
        this.hideTerms = !this.hideTerms;
    }
}
