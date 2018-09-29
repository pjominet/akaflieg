import {Component, OnInit} from '@angular/core';

@Component({
    selector: 'app-main-page',
    templateUrl: './main-page.component.html',
    styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

    public isCollapsed = true;
    public hideTerms = true;

    public showScrollTopButton = false;

    constructor() {
    }

    ngOnInit(): void {
    }

    public enter() {
        this.showScrollTopButton = false;
    }

    public leave() {
        this.showScrollTopButton = true;
    }
}
