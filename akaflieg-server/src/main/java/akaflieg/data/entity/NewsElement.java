package akaflieg.data.entity;

import javax.persistence.*;

/**
 * Created by tom on 12/28/16.
 */
@Entity
@Table(name = "news_elements")
public class NewsElement {

    @Id
    @Column(name = "id")
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(name="header")
    private String header;

    @Column(name="body", columnDefinition = "TEXT")
    private String body;

}
