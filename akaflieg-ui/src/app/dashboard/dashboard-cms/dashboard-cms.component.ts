import {Component, OnInit} from '@angular/core';
import {User} from '../../helpers/user/user';
import {UserService} from '../../helpers/user/user.service';
import {NewsService} from '../../sections/news/news.service';
import {DashboardCmsService} from './dashboard-cms.service';
import {LoginService} from '../login/login.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-dashboard-cms',
    templateUrl: './dashboard-cms.component.html',
    styleUrls: ['./dashboard-cms.component.scss']
})
export class DashboardCmsComponent implements OnInit {
    currentUser: User;
    users: User[] = [];
    editSelect: any = {};
    editOptions = ['news', 'tryout', 'membership', 'prices'];
    news: any = {};
    private fileToUpload: FormData;

    constructor(private userService: UserService,
                private newsService: NewsService,
                private cmsService: DashboardCmsService,
                private loginService: LoginService,
                private router: Router) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.editSelect = this.editOptions[0];
        // this.loadAllUsers();
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

    upload() {
        if (this.editSelect === 'news') {
            this.newsService.addItem(this.news.title, this. news.body);
        }
        this.cmsService.upload(this.fileToUpload);
    }

    getFile(event) {
        const fileList = event.target.files;
        if (fileList > 0) {
            const file: File = fileList[0];
            const formData: FormData = new FormData();
            formData.append('cmsFile', file, file.name);
            this.fileToUpload = formData;
        }
    }

    logout() {
        this.loginService.logout();
        this.router.navigate(['/dashboard/login'])
    }
}
