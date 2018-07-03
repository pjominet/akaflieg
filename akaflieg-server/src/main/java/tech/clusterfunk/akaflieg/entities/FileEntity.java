package tech.clusterfunk.akaflieg.entities;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Table(name = "FILE")
public class FileEntity {

    @Id
    @GeneratedValue
    @Column(name = "FILE_ID")
    private Long id;

    @Column(name = "NAME")
    private String name;

    @Column(name = "DATA")
    private byte[] data;

    @Column(name = "MIMETYPE")
    private String mimetype;

    @Column(name = "CREATION_DATE")
    private LocalDateTime creationDate;

    @Column(name = "LAST_MODIFIED")
    private LocalDateTime lastModified;

    @Column(name = "PUB_DATE_TIME")
    private LocalDateTime publicationDateTime;

    public FileEntity(String name, byte[] data, String mimetype,
                      LocalDateTime publicationDateTime, LocalDateTime creationDate, LocalDateTime lastModified) {
        this.name = name;
        this.data = data;
        this.mimetype = mimetype;
        this.publicationDateTime = publicationDateTime;
        this.creationDate = creationDate;
        this.lastModified = lastModified;
    }

    public FileEntity() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }

    public String getMimetype() {
        return mimetype;
    }

    public void setMimetype(String mimetype) {
        this.mimetype = mimetype;
    }

    public LocalDateTime getCreationDate() {
        return creationDate;
    }

    public void setCreationDate(LocalDateTime creationDate) {
        this.creationDate = creationDate;
    }

    public LocalDateTime getLastModified() {
        return lastModified;
    }

    public void setLastModified(LocalDateTime lastModified) {
        this.lastModified = lastModified;
    }

    public LocalDateTime getPublicationDateTime() {
        return publicationDateTime;
    }

    public void setPublicationDateTime(LocalDateTime publicationDateTime) {
        this.publicationDateTime = publicationDateTime;
    }
}
