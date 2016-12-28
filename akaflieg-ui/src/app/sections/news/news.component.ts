import { Component, OnInit } from '@angular/core';
import {NewsItem} from "./news-item";

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['news.component.scss']
})
export class NewsComponent implements OnInit {
  private news: NewsItem[] = [];

  constructor() { }

  ngOnInit() {

  }

}
