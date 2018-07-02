package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.dto.NewsDTO;
import tech.clusterfunk.akaflieg.entities.NewsEntity;
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

    public List<NewsDTO> getAllNews() {
        return newsRepository.findAll()
            .stream()
            .map(NewsDTO::fromEntity)
            .collect(Collectors.toList());
    }

    public List<NewsDTO> getLatestNews() {
        return newsRepository.findFirst5ByOrderByCreationDateDesc()
            .stream()
            .map(NewsDTO::fromEntity)
            .collect(Collectors.toList());
    }

    public void addArticle(NewsEntity article) {
        newsRepository.save(article);
    }
}
