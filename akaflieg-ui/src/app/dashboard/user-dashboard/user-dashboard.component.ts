import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.scss']
})
export class UserDashboardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private dummy = {
    name: 'Max Muster',
    username: 'mmuster',
    email: 'max@muster.de',
    access: 'Verwalter'
  };

}
