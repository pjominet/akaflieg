package tech.clusterfunk.akaflieg;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
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
                logger.info("Creating user: \"root\"");
                UserEntity newUser = new UserEntity();
                newUser.setUsername("root");
                newUser.setPassword(encoder.encode("q1w2e3"));
                userRepo.save(newUser);
            } else {
                logger.warn("UserEntity \"" + user.getUsername() + "\" already exists");
            }

            // Create test files TODO: remove in live
            logger.info("creating test files...");
            int i;
            for(i = 0; i < 4; i++) {
                String filename;
                byte[] data;
                String mimetype;
                if (i < 2) {
                    filename = "Testfile" + i + ".txt";
                    data = ("Lorem Ipsum Test" + i).getBytes();
                    mimetype = "text/plain";
                } else {
                    filename = "Testfile" + i + ".md";
                    data = ("# Lorem Ipsum" + i + "\nDolor sit").getBytes();
                    mimetype = "text/markdown";
                }
                FileEntity file = new FileEntity(filename, data, mimetype);
                fileRepo.save(file);
            }
            logger.info("added " + i + " test files to file repo");
        };
    }
}
