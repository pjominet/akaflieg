import {Component, OnInit} from '@angular/core';
import {Http, Response, Headers, RequestOptions} from "@angular/http";
import 'rxjs/add/operator/map';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  private arr: any[] = [];

  newItem: any = {};

  constructor(private http: Http,
              private serv: AppService) {
  }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.serv.getAllNews()
      .subscribe(data => this.arr = data);
  }

  addNewsElement() {
    this.serv.addNewElement(this.newItem.header, this.newItem.body)
      .subscribe(data => this.getAllNews(),
        err => console.log(err));
  }
}
