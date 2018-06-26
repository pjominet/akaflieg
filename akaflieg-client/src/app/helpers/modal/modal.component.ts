import {Component, OnInit, ViewChild} from '@angular/core';

import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {Modal} from './modal';
import {ModalService} from './modal.service';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

    title: string;
    body: string;
    @ViewChild('modal') modal: any;

    constructor(private ngbmService: NgbModal, private modalService: ModalService) {
    }

    private populateModal(title, body) {
        this.title = title;
        this.body = body;
        this.ngbmService.open(this.modal);
    }

    ngOnInit(): void {
        this.modalService.getModal().subscribe((modal: Modal) => {
            this.populateModal(modal.title, modal.body)
        });
    }
}
