package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.clusterfunk.akaflieg.entities.NewsArticle;
import tech.clusterfunk.akaflieg.services.NewsService;

import java.util.List;

@RestController
@RequestMapping("/news")
public class NewsController {

    private NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping("/latest")
    public List<NewsArticle> getLatestNews() {
        return newsService.getLatestNews();
    }

    @GetMapping("/all")
    public List<NewsArticle> getAllNews() {
        return newsService.getAllNews();
    }

    @PostMapping("/add")
    public void addNewsArticle(@RequestBody NewsArticle article){
        this.newsService.addArticle(article);
    }
}
