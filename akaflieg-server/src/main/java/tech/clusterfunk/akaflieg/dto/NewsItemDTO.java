package tech.clusterfunk.akaflieg.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import tech.clusterfunk.akaflieg.entities.NewsItem;

import java.time.LocalDate;

public class NewsItemDTO {

    private long id;
    private String title;
    private String content;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate creationDate;

    public NewsItemDTO(){}

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

    public static NewsItemDTO fromEntity(NewsItem article){
        NewsItemDTO dto = new NewsItemDTO();
        dto.setId(article.getId());
        dto.setTitle(article.getTitle());
        dto.setContent(article.getContent());
        dto.setCreationDate(article.getCreationDate());
        return dto;
    }
}
