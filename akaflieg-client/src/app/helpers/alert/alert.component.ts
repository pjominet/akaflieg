import {AfterViewInit, Component, OnInit} from '@angular/core';
import {AlertService} from './alert.service';
import {ElementRef, ViewChild} from '@angular/core';

declare var $;

@Component({
    selector: 'app-alert',
    templateUrl: './alert.component.html',
    styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit, AfterViewInit {
    message: any;

    @ViewChild('alertModal') alertModal: ElementRef;

    constructor(private alertService: AlertService) {
    }

    ngOnInit() {
        this.alertService.getMessage().subscribe(message => {
            this.message = message;
        });
    }

    ngAfterViewInit() {
        if (this.message)
            $(this.alertModal.nativeElement).modal('show');
    }

}
