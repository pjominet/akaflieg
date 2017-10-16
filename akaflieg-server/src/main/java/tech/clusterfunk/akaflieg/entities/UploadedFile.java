package tech.clusterfunk.akaflieg.entities;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;

@Entity
@Table(name= "AKA_NEWS_ARTICLE_PICTURE")
public class UploadedFile {

    @Id
    @GeneratedValue
    @Column(name = "FILE_ID")
    private Long id;

    private String fileName;

    @JsonIgnore
    @Column(name = "DATA", nullable = false)
    private byte[] data;

    public UploadedFile(String fileName, byte[] data) {
        this.fileName = fileName;
        this.data = data;
    }

    public UploadedFile() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getFileName() {
        return fileName;
    }

    public void setFileName(String fileName) {
        this.fileName = fileName;
    }

    public byte[] getData() {
        return data;
    }

    public void setData(byte[] data) {
        this.data = data;
    }
}
