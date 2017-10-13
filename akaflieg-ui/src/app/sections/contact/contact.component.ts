import {Component, OnInit} from '@angular/core';
import {ContactService} from './contact.service';
import {AlertService} from '../../helpers/alert/alert.service';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
    model: any = {};
    sendStatus: String;

    constructor(private contactService: ContactService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.sendStatus = 'waiting';
    }

    sendMail() {
        this.sendStatus = 'sending';
        this.contactService.sendMail(this.model.name, this.model.email, this.model.phone, this.model.message)
            .subscribe(data => {
                this.sendStatus = 'success';
            }, error => {
                this.alertService.error(error);
                this.sendStatus = 'fail';
            });
    }

}
