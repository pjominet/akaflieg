package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.dto.NewsArticleDTO;
import tech.clusterfunk.akaflieg.entities.NewsArticle;
import tech.clusterfunk.akaflieg.repository.NewsRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class NewsService {

    private NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<NewsArticleDTO> getAllNews() {
        return newsRepository.findAll()
                .stream()
                .map(NewsArticleDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public List<NewsArticleDTO> getLatestNews() {
        return newsRepository.findFirst5ByOrderByCreationDateDesc()
                .stream()
                .map(NewsArticleDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public void addArticle(NewsArticle article) {
        newsRepository.save(article);
    }
}
