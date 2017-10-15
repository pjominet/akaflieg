package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.entities.NewsArticle;
import tech.clusterfunk.akaflieg.repository.NewsRepository;

import java.util.List;

@Service
public class NewsService {

    private NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<NewsArticle> getAllNews() {
        return newsRepository.findAll();
    }

    public List<NewsArticle> getLatestNews() {
        return newsRepository.findFirst5ByOrderByCreationDateDesc();
    }

    public void addArticle(NewsArticle article) {
        newsRepository.save(article);
    }
}
