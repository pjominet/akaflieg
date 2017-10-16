package tech.clusterfunk.akaflieg.entities;

import javax.persistence.*;

@Entity
@Table(name= "AKA_NEWS_ARTICLE_PICTURE", schema = "AKAFLIEG")
public class ArticlePicture {

    @Id
    @GeneratedValue
    @Column(name = "NEWS_PICTURE_ID")
    private Long id;

}
