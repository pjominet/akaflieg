import {Component, OnInit, ViewChild} from '@angular/core';
import {DashboardCmsService} from './dashboard-cms.service';
import {AuthenticationService} from '../../helpers/auth/authentication.service';
import {Router} from '@angular/router';
import {NgbDateStruct, NgbTimeStruct} from '@ng-bootstrap/ng-bootstrap';
import {ModalService} from '../../helpers/modal/modal.service';
import {first} from "rxjs/operators";
import {AlertService} from "../../helpers/alert/alert.service";
import {environment} from "../../../environments/environment";
import {TdTextEditorComponent} from "@covalent/text-editor";
import DateTimeFormat = Intl.DateTimeFormat;

const now = new Date();

@Component({
    selector: 'app-dashboard-cms',
    templateUrl: './dashboard-cms.component.html',
    styleUrls: ['./dashboard-cms.component.scss']
})
export class DashboardCmsComponent implements OnInit {
    @ViewChild('helpModal') helpModal: any;
    @ViewChild('mde') mde: TdTextEditorComponent;

    editSelect: string;
    editOptions = ['club', 'advantages', 'tryout', 'membership', 'prices', 'info', 'projects'];

    mdeContent = '# Heading\nText with [Link](http://example.com)';
    mdeOptions: any = {
        toolbar: ['bold', 'italic', 'heading', '|', 'link', 'table', '|', 'preview', {
            name: 'guide',
            action: this.openMarkdownGuide(),
            className: 'fa fa-question-circle',
            title: 'Markdown Guide'
        }],
        blockStyles: {
            italic: '_'
        },
        indentWithTabs: false,
        spellChecker: false,
        tabSize: 4
    };

    date: NgbDateStruct;
    time: NgbTimeStruct;

    formData: FormData;

    constructor(private cmsService: DashboardCmsService,
                private loginService: AuthenticationService,
                private router: Router,
                private modalService: ModalService,
                private alertService: AlertService) {
    }

    ngOnInit() {
        this.editSelect = this.editOptions[0];
        this.date = {year: now.getFullYear(), month: now.getMonth() + 1, day: now.getDate()};
        this.time = {hour: 0, minute: 0, second: 0};
    }

    public update() {
        this.alertService.clear();

        let section = this.editSelect;
        let data = this.mdeContent;
        let publicationDateTime = new Date(
            this.date.year, this.date.month - 1, this.date.day + 1,
            this.time.hour, this.time.minute, this.time.second).toISOString();
        let mimetype = 'text/markdown';

        this.cmsService.upload(section, data, publicationDateTime, mimetype).pipe(first()).subscribe(
            success => {
                this.alertService.success('Aktualisierung erfolgreich!');
                if (!environment.production) console.log("success");
            },
            error => {
                if (error.status === 503)
                    this.alertService.error('Fehler beim Hochladen der Daten: Server antwortet nicht.');
                if (error.status === 500)
                    this.alertService.error('Fehler beim Hochladen der Daten: Bearbeitungsfehler auf dem Server.');
                if (error.status === 415)
                    this.alertService.warn('Aktualisierung abgebrochen: Datei Typ wird nicht unterstützt.');
                if (error.status === 400)
                    this.alertService.warn('Aktualisierung abgebrochen: Der Inhalt wurde nicht verändert.');
                if (!environment.production) console.log(error);
            }
        );
    }

    public getFile(event) {
        const fileList = event.target.files;
        if (fileList > 0) {
            const file: File = fileList[0];
            const formData: FormData = new FormData();
            formData.append('cmsFile', file, file.name);
            this.formData = formData;
        }
    }

    public logout() {
        this.loginService.logout();
        this.router.navigate(['/dashboard/login'])
            .then(function () {
                console.log('Logged out');
            })
            .catch(function () {
                console.log('Logging out failed');
            });
    }

    public openMarkdownGuide() {
        this.modalService.open(
            'Markdown Guide',
            '<h5 class="text-muted">Hervorhebung</h5>' +
            '<pre class="well">' +
            '**<strong>fett</strong>**' +
            '<br>' +
            '_<em>kursiv</em>_' +
            '</pre>' +
            '<h5 class="text-muted">Überschriften</h5>' +
            '<pre class="well">' +
            '# Große Überschrift<br>' +
            '## Mittlere Überschrift<br>' +
            '### Kleine Überschrift<br>' +
            '#### Winzige Überschrift' +
            '</pre>' +
            '<h5 class="text-muted">Links</h5>' +
            '<pre class="well">' +
            '[Sichtbarer Text](http://www.example.com)' +
            '</pre>' +
            '<h5 class="text-muted">Tabellen</h5>' +
            '<pre class="well">' +
            '| Spalte 1 | Spalte 2 | Spalte 3 |<br>' +
            '| -------- | -------- | -------- |<br>' +
            '| Lorem    | Ipsum    | Dolor    |<br>' +
            '| Flug     | Preis 1  | Preis 2  |' +
            '</pre>'
        )
    }
}
