package tech.clusterfunk.akaflieg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.clusterfunk.akaflieg.entities.NewsEntity;

import java.util.List;

public interface NewsRepository extends JpaRepository<NewsEntity, Long> {

    List<NewsEntity> findAll();

    List<NewsEntity> findFirst5ByOrderByCreationDateDesc();

}
