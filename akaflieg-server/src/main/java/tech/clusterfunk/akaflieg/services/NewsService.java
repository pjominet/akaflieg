package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.dto.NewsItemDTO;
import tech.clusterfunk.akaflieg.entities.NewsItem;
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

    public List<NewsItemDTO> getAllNews() {
        return newsRepository.findAll()
                .stream()
                .map(NewsItemDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public List<NewsItemDTO> getLatestNews() {
        return newsRepository.findFirst5ByOrderByCreationDateDesc()
                .stream()
                .map(NewsItemDTO::fromEntity)
                .collect(Collectors.toList());
    }

    public void addArticle(NewsItem article) {
        newsRepository.save(article);
    }
}
