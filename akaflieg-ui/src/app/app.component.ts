import {Component, OnInit} from '@angular/core';
import {Http, Response} from "@angular/http";
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  private title = 'app works!';

  constructor(private http: Http) {
  }

  ngOnInit(): void {
    this.http.get("http://localhost:8080/news/test")
      .map((res: Response) => res.text())
      .subscribe(data => this.title = data);
  }
}
