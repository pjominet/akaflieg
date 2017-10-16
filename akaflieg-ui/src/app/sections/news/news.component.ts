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
    news: NewsItem[] = [];

    constructor(private http: Http,
                private newsService: NewsService) {
    }

    ngOnInit() {
        // this.getAllNews();
        this.getMockNews();
    }

    getAllNews() {
        this.newsService.getAll()
            .subscribe(data => this.news = data);
    }

    getMockNews() {
        this.newsService.getMock()
            .subscribe(data => this.news = data);
    }
}
