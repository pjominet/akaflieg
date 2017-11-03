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
    sending = false;

    constructor(private contactService: ContactService,
                private alertService: AlertService) {
    }

    ngOnInit() {
    }

    public sendMail() {
        this.sending = true;
        this.contactService.sendMail(this.model.name, this.model.email, this.model.subject, this.model.message)
            .subscribe(data => {
                this.sending = false;
                this.alertService.success('Nachricht erfolgreich versendet')
            }, error => {
                this.alertService.error(error);
                this.sending = false;
            });
    }
}
