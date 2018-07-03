package tech.clusterfunk.akaflieg.dto;

import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;

public class FileDTO {
    private String filename;
    private String data;
    private String mimetype;

    @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME)
    private LocalDateTime pubDate;

    public FileDTO() {
    }

    public FileDTO(String filename, String data, String mimetype, LocalDateTime pubDate) {
        this.filename = filename;
        this.data = data;
        this.pubDate = pubDate;
        this.mimetype = mimetype;
    }

    public String getFilename() {
        return filename;
    }

    public void setFilename(String filename) {
        this.filename = filename;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getMimetype() {
        return mimetype;
    }

    public void setMimetype(String mimetype) {
        this.mimetype = mimetype;
    }

    public LocalDateTime getPubDate() {
        return pubDate;
    }

    public void setPubDate(LocalDateTime pubDate) {
        this.pubDate = pubDate;
    }
}
