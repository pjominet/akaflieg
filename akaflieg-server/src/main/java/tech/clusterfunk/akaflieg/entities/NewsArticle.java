package tech.clusterfunk.akaflieg.entities;

import javax.persistence.*;
import java.time.LocalDate;
import java.util.List;

@Entity
@Table(name = "AKA_NEWS_ARTICLE", schema = "AKAFLIEG")
public class NewsArticle {

    @Id
    @GeneratedValue
    @Column(name = "ARTICLE_ID")
    private long id;
    @Column(name = "TITLE")
    private String title;
    @Column(name = "CONTENT")
    private String content;
    @Column(name = "PICTURES")
    private List<ArticlePicture> pictures;
    @Column(name = "CREATION_DATE")
    @OneToMany(fetch = FetchType.EAGER)
    @JoinColumn(name = "USER_ID", nullable = false)
    private LocalDate creationDate;
    @Column(name = "TITLE")
    private LocalDate updateDate;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", nullable = false)
    private User creator;

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

    public List<ArticlePicture> getPictures() {
        return pictures;
    }

    public void setPictures(List<ArticlePicture> pictures) {
        this.pictures = pictures;
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

    public LocalDate getUpdateDate() {
        return updateDate;
    }

    public void setUpdateDate(LocalDate updateDate) {
        this.updateDate = updateDate;
    }
}
