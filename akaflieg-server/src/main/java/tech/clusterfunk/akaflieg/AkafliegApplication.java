package tech.clusterfunk.akaflieg;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import tech.clusterfunk.akaflieg.entities.NewsItem;
import tech.clusterfunk.akaflieg.entities.User;
import tech.clusterfunk.akaflieg.repository.NewsRepository;
import tech.clusterfunk.akaflieg.repository.UserRepository;

import java.time.LocalDate;

@SpringBootApplication
public class AkafliegApplication {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    public static void main(String[] args) {
        SpringApplication.run(AkafliegApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner init(UserRepository userRepo, NewsRepository newsRepo, BCryptPasswordEncoder encoder) {
        return (evt) -> {
            User user = userRepo.findByUsername("aka-admin");
            if (user == null) {
                logger.info("Creating user: \"root\"");
                User newUser = new User();
                newUser.setUsername("root");
                newUser.setPassword(encoder.encode("q1w2e3"));
                userRepo.save(newUser);
                user = newUser;
            }else{
                logger.warn("User \"" + user.getUsername() + "\" already exists");
            }

            /* ignored until further notice
            NewsItem newsItem = new NewsItem();
            newsItem.setTitle("TEST POST");
            newsItem.setContent("This is a test news post, please ignore");
            newsItem.setCreationDate(LocalDate.now());
            newsItem.setCreator(user);
            newsRepo.save(newsItem);
            */
        };
    }
}
