package tech.clusterfunk.akaflieg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.clusterfunk.akaflieg.entities.NewsItem;

import java.util.List;

public interface NewsRepository extends JpaRepository<NewsItem, Long> {

    List<NewsItem> findAll();

    List<NewsItem> findFirst5ByOrderByCreationDateDesc();

}
