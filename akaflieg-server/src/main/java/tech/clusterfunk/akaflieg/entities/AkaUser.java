package tech.clusterfunk.akaflieg.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "akaUser")
public class AkaUser {

    @Id
    @GeneratedValue
    @Column(name = "USER_ID")
    private long id;
    private String username;
    private String password;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creator", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NewsArticle> articles;

    public AkaUser(String username, String password) {
        this.username = username;
        this.password = password;
    }

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public List<NewsArticle> getArticles() {
        return articles;
    }

    public void setArticles(List<NewsArticle> articles) {
        this.articles = articles;
    }
}

