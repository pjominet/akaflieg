package tech.clusterfunk.akaflieg.entities;

import javax.persistence.*;
import java.time.LocalDate;

@Entity
@Table(name = "NEWS_ITEM")
public class NewsEntity {

    @Id
    @GeneratedValue
    @Column(name = "NEWS_ID")
    private long id;

    @Column(name = "TITLE")
    private String title;

    @Column(name = "CONTENT")
    private String content;

    //@Column(name = "IMAGE")
    @OneToOne(fetch = FetchType.EAGER)
    @JoinColumn(name = "FILE_ID", nullable = true)
    private FileEntity image;

    @Column(name = "CREATION_DATE")
    private LocalDate creationDate;

    @Column(name = "LAST_MODIFIED")
    private LocalDate lastModified;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "USER_ID", nullable = false)
    private UserEntity creator;

    public NewsEntity() {
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

    public FileEntity getImage() {
        return image;
    }

    public void setImage(FileEntity picture) {
        this.image = picture;
    }

    public UserEntity getCreator() {
        return creator;
    }

    public void setCreator(UserEntity creator) {
        this.creator = creator;
    }

    public LocalDate getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDate creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDate getLastModified() {
        return lastModified;
    }

    public void setLastModified(LocalDate lastModified) {
        this.lastModified = lastModified;
    }
}
