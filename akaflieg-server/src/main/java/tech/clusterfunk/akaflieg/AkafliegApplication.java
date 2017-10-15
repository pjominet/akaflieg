package tech.clusterfunk.akaflieg;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

/**
 * Created by tom on 12/28/16.
 */
@SpringBootApplication
//@ComponentScan(basePackages = { "tech.clusterfunk.akaflieg" })
public class AkafliegApplication {

    public static void main(String[] args) {
        SpringApplication.run(AkafliegApplication.class, args);
    }

    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }
}