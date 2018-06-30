import {Component, OnInit} from '@angular/core';

declare const $: any;

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    public isCollapsed = true;
    public hidePrivacy = true;
    public hideTerms = true;

    constructor() {
    }

    ngOnInit(): void {
    }
}
