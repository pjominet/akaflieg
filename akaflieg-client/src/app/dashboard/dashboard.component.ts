import {Component, ElementRef, OnInit, Renderer} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public isCollapsed = true;

    constructor() {
    }

    ngOnInit() {
    }
}
