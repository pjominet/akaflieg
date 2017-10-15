package tech.clusterfunk.akaflieg;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import tech.clusterfunk.akaflieg.entities.User;
import tech.clusterfunk.akaflieg.repository.UserRepository;

/**
 * Created by tom on 12/28/16.
 */
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
    CommandLineRunner init(UserRepository userRepo, BCryptPasswordEncoder encoder) {
        return (evt) -> {
            User user = userRepo.findByUsername("test");
            if (user == null) {
                logger.info("Creating test user");
                User u = new User("test", "test");
                u.setPassword(encoder.encode(u.getPassword()));
                userRepo.save(u);
            }else{
                logger.warn("test user already exists");
            }
        };
    }
}