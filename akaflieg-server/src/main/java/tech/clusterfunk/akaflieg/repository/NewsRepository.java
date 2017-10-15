package tech.clusterfunk.akaflieg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.clusterfunk.akaflieg.entities.NewsArticle;

import java.util.List;

public interface NewsRepository extends JpaRepository<NewsArticle, Long> {

    List<NewsArticle> findAll();

    List<NewsArticle> findFirst5ByOrderByCreationDateDesc();

}
