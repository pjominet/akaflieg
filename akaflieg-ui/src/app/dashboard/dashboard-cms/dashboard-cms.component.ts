import {Component, OnInit} from '@angular/core';
import {User} from "../../helpers/user/user";
import {UserService} from "../../helpers/user/user.service";

@Component({
    selector: 'app-dashboard-cms',
    templateUrl: './dashboard-cms.component.html',
    styleUrls: ['./dashboard-cms.component.scss']
})
export class DashboardCmsComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }

}
