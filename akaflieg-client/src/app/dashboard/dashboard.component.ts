import {Component, ElementRef, OnInit, Renderer} from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
    public isCollapsed = true;

    constructor(private elementRef: ElementRef, private renderer: Renderer) {
    }

    ngOnInit() {
    }

    // https://github.com/mdbootstrap/Angular-Bootstrap-with-Material-Design/issues/28
    public menuToggle() {
        this.renderer.setElementClass(
            this.elementRef.nativeElement.querySelector('.navbar-collapse'),
            'show', false);
    }
}
