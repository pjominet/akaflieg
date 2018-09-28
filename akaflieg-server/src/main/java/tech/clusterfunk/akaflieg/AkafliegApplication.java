package tech.clusterfunk.akaflieg;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import tech.clusterfunk.akaflieg.entities.FileEntity;
import tech.clusterfunk.akaflieg.entities.UserEntity;
import tech.clusterfunk.akaflieg.repository.FileRepository;
import tech.clusterfunk.akaflieg.repository.UserRepository;

@SpringBootApplication
public class AkafliegApplication {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    @Value("${cms.user}")
    private String cms_user;
    @Value("${cms.password}")
    private String cms_password;

    public static void main(String[] args) {
        SpringApplication.run(AkafliegApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    CommandLineRunner init(UserRepository userRepo, FileRepository fileRepo, BCryptPasswordEncoder encoder) {
        return (event) -> {
            // create root user TODO: should be set with launch param
            UserEntity user = userRepo.findByUsername("root");
            if (user == null) {
                logger.info("Creating user: \"" + cms_user + "\"");
                UserEntity newUser = new UserEntity();
                newUser.setUsername(cms_user);
                newUser.setPassword(encoder.encode(cms_password));
                userRepo.save(newUser);
            } else {
                logger.warn("UserEntity \"" + user.getUsername() + "\" already exists");
            }

            // TODO: load content into db on startup
        };
    }
}
