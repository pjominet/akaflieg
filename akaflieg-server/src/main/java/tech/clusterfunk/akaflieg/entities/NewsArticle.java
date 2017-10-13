package tech.clusterfunk.akaflieg.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "akaArticle", schema = "akaflieg")
public class NewsArticle {

    @Id
    @GeneratedValue
    private long id;
    private String content;
    private LocalDate creationDate;
    private LocalDate updateDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name="id", nullable = false)
    private User creator;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getContent() {
        return content;
    }

    public void setContent(String content) {
        this.content = content;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }
}
