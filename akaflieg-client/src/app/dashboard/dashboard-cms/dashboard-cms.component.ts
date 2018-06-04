import {Component, OnInit} from '@angular/core';
import {User} from '../../helpers/user/user';
import {UserService} from '../../helpers/user/user.service';
import {NewsService} from '../../sections/news/news.service';
import {DashboardCmsService} from './dashboard-cms.service';
import {AuthenticationService} from '../../helpers/auth/authentication.service';
import {Router} from '@angular/router';
import {environment} from '../../../environments/environment';

@Component({
    selector: 'app-dashboard-cms',
    templateUrl: './dashboard-cms.component.html',
    styleUrls: ['./dashboard-cms.component.scss']
})
export class DashboardCmsComponent implements OnInit {
    editSelect: any = {};
    editOptions = ['about', 'tryout', 'membership', 'prices', 'info', 'projects'];
    content: any = {};
    date: any;
    time: any;
    private fileToUpload: FormData;

    constructor(private cmsService: DashboardCmsService,
                private loginService: AuthenticationService,
                private router: Router) {
    }

    ngOnInit() {
        this.editSelect = this.editOptions[0];
    }

    public upload() {
        this.cmsService.upload(this.fileToUpload);
    }

    public getFile(event) {
        const fileList = event.target.files;
        if (fileList > 0) {
            const file: File = fileList[0];
            const formData: FormData = new FormData();
            formData.append('cmsFile', file, file.name);
            this.fileToUpload = formData;
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
}
