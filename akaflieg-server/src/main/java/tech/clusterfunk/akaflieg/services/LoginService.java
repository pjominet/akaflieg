package tech.clusterfunk.akaflieg.services;

import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class LoginService {

    public String login() {
        return UUID.randomUUID().toString();
    }

}
