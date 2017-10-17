package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.clusterfunk.akaflieg.dto.NewsItemDTO;
import tech.clusterfunk.akaflieg.entities.NewsItem;
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
    public List<NewsItemDTO> getLatestNews() {
        return newsService.getLatestNews();
    }

    @GetMapping("/all")
    public List<NewsItemDTO> getAllNews() {
        return newsService.getAllNews();
    }

    @PostMapping("/add")
    public void addNewsArticle(@RequestBody NewsItem article){
        this.newsService.addArticle(article);
    }
}
