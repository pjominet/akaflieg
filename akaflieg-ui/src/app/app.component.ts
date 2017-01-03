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
  private dataArray: any[] = [];

  newItem: any = {};

  constructor(private http: Http,
              private appService: AppService) {
  }

  ngOnInit(): void {
    this.getAllNews();
  }

  getAllNews() {
    this.appService.getAllNews()
      .subscribe(data => this.dataArray = data);
  }

  addNewsElement() {
    this.appService.addNewElement(this.newItem.header, this.newItem.body)
      .subscribe(data => this.getAllNews(),
        err => console.log(err));
  }
}
