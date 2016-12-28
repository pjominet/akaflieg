package akaflieg.data.repository;

import akaflieg.data.entity.NewsElement;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by tom on 12/28/16.
 */
public interface NewsRepository extends JpaRepository<NewsElement, Long> {
}
