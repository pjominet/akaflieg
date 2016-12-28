package akaflieg.service;

import akaflieg.data.dto.NewsElementDTO;
import akaflieg.data.entity.NewsElement;
import akaflieg.data.repository.NewsRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

/**
 * Created by tom on 12/28/16.
 */
@Service
public class NewsService {

    private final NewsRepository newsRepository;

    @Autowired
    public NewsService(NewsRepository newsRepository) {
        this.newsRepository = newsRepository;
    }

    public List<NewsElement> getAllNews(){
        return newsRepository.findAll();
    }

    public NewsElement addNewElement(NewsElementDTO newsElementDTO) {
        NewsElement newsElement = new NewsElement();
        newsElement.setHeader(newsElementDTO.getHeader());
        newsElement.setBody(newsElementDTO.getBody());
        return newsRepository.save(newsElement);
    }
}
