import {Component, OnInit, AfterViewInit} from '@angular/core';
import { ScrollSpyService } from 'ng2-scrollspy';
declare var $: any;

@Component({
    selector: 'main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit,AfterViewInit {

    private togglePrivacy: boolean = false;
    private toggleTerms: boolean = false;

    constructor(private scrollSpyService: ScrollSpyService) {
    }

    ngOnInit(): void {

        /* ---- jQuery-Bootstrap Features ---- */
        $(document).ready(function () {
            // scroll spy (requires bootstrap.js)
            $('body').scrollspy({
                target: '.navbar-fixed-top',
                offset: 51
            });

            // create navbar when scrolling
            $('#mainNav').affix({
                offset: {
                    top: 100
                }
            });

            // hamburger menu toggle
            $('.navbar-collapse ul li a').click(function () {
                $('.navbar-toggle:visible').click();
            });
        });
    }

    ngAfterViewInit() {
        this.scrollSpyService.getObservable('window').subscribe((e: any) => {
            console.log('ScrollSpy::window: ', e);
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
