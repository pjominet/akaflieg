package akaflieg.data.entity;

import javax.persistence.*;

/**
 * Created by tom on 12/28/16.
 */
@Entity
@Table(name = "news_element")
public class NewsElement {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="header")
    private String header;

    @Column(name="body", columnDefinition = "TEXT")
    private String body;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getHeader() {
        return header;
    }

    public void setHeader(String header) {
        this.header = header;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }
}
