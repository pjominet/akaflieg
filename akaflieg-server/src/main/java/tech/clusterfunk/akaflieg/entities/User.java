package tech.clusterfunk.akaflieg.entities;

import javax.persistence.*;
import java.util.List;

@Entity
@Table(name = "AKA_USER")
public class User {

    @Id
    @GeneratedValue
    @Column(name = "USER_ID")
    private long id;
    @Column(name = "USERNAME")
    private String username;
    @Column(name = "PASSWORD")
    private String password;

    @OneToMany(fetch = FetchType.LAZY, mappedBy = "creator", cascade = CascadeType.ALL, orphanRemoval = true)
    private List<NewsItem> articles;

    public User() {}

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

    public List<NewsItem> getArticles() {
        return articles;
    }

    public void setArticles(List<NewsItem> articles) {
        this.articles = articles;
    }
}

