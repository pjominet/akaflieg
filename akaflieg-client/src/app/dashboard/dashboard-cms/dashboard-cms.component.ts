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
    currentUser: User;
    users: User[] = [];
    editSelect: any = {};
    editOptions = ['about', 'tryout', 'membership', 'prices', 'info', 'projects'];
    news: any = {};
    private fileToUpload: FormData;

    constructor(private userService: UserService,
                private newsService: NewsService,
                private cmsService: DashboardCmsService,
                private loginService: AuthenticationService,
                private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.editSelect = this.editOptions[0];
        if (environment.production)
            this.loadAllUsers();
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => {
            this.users = users;
        });
    }

    public upload() {
        if (this.editSelect === 'news')
            this.newsService.addItem(this.news.title, this.news.body);
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
