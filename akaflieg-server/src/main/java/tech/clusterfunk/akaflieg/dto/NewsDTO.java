package tech.clusterfunk.akaflieg.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import tech.clusterfunk.akaflieg.entities.NewsEntity;

import java.time.LocalDate;

public class NewsDTO {

    private long id;
    private String title;
    private String content;

    @JsonFormat(pattern = "yyyy-MM-dd")
    private LocalDate creationDate;

    public NewsDTO() {
    }

    public static NewsDTO fromEntity(NewsEntity article) {
        NewsDTO dto = new NewsDTO();
        dto.setId(article.getId());
        dto.setTitle(article.getTitle());
        dto.setContent(article.getContent());
        dto.setCreationDate(article.getCreationDate());
        return dto;
    }

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
}
