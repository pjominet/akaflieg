import {Injectable} from '@angular/core';
import {Subject, Observable} from 'rxjs';
import {Modal} from './modal';

@Injectable()
export class ModalService {
    private subject = new Subject<Modal>();

    getModal(): Observable<any> {
        return this.subject.asObservable();
    }

    public open(title, body) {
        this.subject.next(<Modal>{title: title, body: body});
    }
}

