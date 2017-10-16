package tech.clusterfunk.akaflieg.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import tech.clusterfunk.akaflieg.entities.NewsArticle;

import java.time.LocalDate;

public class NewsArticleDTO {

    private long id;
    private String title;
    private String content;

    @JsonFormat(pattern = "dd-MM-yyyy")
    private LocalDate creationDate;

    public NewsArticleDTO(){}

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public static NewsArticleDTO fromEntity(NewsArticle article){
        NewsArticleDTO dto = new NewsArticleDTO();
        dto.setId(article.getId());
        dto.setTitle(article.getTitle());
        dto.setContent(article.getContent());
        dto.setCreationDate(article.getCreationDate());
        return dto;
    }
}
