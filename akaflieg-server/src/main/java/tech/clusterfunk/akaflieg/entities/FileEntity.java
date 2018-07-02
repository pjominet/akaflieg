package tech.clusterfunk.akaflieg.entities;

import javax.persistence.*;
import java.time.LocalDate;

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
    private LocalDate creationDate;

    @Column(name = "LAST_MODIFIED")
    private LocalDate lastModified;

    public FileEntity(String name, byte[] data, String mimetype) {
        this.name = name;
        this.data = data;
        this.mimetype = mimetype;
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
