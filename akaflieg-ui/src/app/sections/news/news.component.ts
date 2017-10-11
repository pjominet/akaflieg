import {Component, OnInit} from '@angular/core';
import {NewsItem} from './news-item';
import {NewsService} from './news.service';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.scss']
})
export class NewsComponent implements OnInit {
    private news: NewsItem[] = [];

    newsItem: any = {};

    constructor(private http: Http,
                private newsService: NewsService) {
    }

    ngOnInit() {
        this.getAllNews();
    }

    getAllNews() {
        this.newsService.getAllNews()
            .subscribe(data => this.news = data);
    }

    addNewsElement() {
        this.newsService.addNewElement(this.newsItem.header, this.newsItem.body)
            .subscribe(data => this.getAllNews(),
                err => console.log(err));
    }
}
