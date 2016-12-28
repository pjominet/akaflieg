package akaflieg.controller;

import akaflieg.data.dto.NewsElementDTO;
import akaflieg.data.entity.NewsElement;
import akaflieg.service.NewsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Created by tom on 12/28/16.
 */
@RestController
@RequestMapping("/news")
public class NewsController {

    private final NewsService newsService;

    @Autowired
    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @GetMapping("/test")
    @CrossOrigin(origins = "*")
    public List<NewsElement> test(){
        return newsService.getAllNews();
    }

    @PostMapping("/test")
    @CrossOrigin(origins = "*")
    public NewsElement addElement(@RequestBody NewsElementDTO newsElementDTO){
        return newsService.addNewElement(newsElementDTO);
    }
}
