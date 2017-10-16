package tech.clusterfunk.akaflieg.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "AKA_NEWS_ARTICLE")
public class NewsArticle {

    @Id
    @GeneratedValue
    @Column(name = "ARTICLE_ID")
    private long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "CONTENT")
    private String content;

    //@Column(name = "PICTURE")
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "FILE_ID", nullable = true)
    private UploadedFile picture;

    @Column(name = "CREATION_DATE")
    private LocalDate creationDate;

    @Column(name = "UPDATE_DATE")
    private LocalDate lastUpdateDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", nullable = false)
    private User creator;

    public NewsArticle() {
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

    public UploadedFile getPictures() {
        return picture;
    }

    public void setPictures(UploadedFile pictures) {
        this.picture = pictures;
    }

    public User getCreator() {
        return creator;
    }

    public void setCreator(User creator) {
        this.creator = creator;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDate getLastUpdateDate() {
        return lastUpdateDate;
    }

    public void setLastUpdateDate(LocalDate lastUpdateDate) {
        this.lastUpdateDate = lastUpdateDate;
    }
}
