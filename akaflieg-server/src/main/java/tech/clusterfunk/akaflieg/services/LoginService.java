package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.entities.AkaUser;
import tech.clusterfunk.akaflieg.repository.UserRepository;

@Service
public class LoginService {

    private UserRepository userRepo;
    private BCryptPasswordEncoder bCryptEncoder;

    @Autowired
    public LoginService(UserRepository userRepo, BCryptPasswordEncoder bCryptEncoder) {
        this.userRepo = userRepo;
        this.bCryptEncoder = bCryptEncoder;
    }

    public void register(AkaUser user) {
        user.setPassword(bCryptEncoder.encode(user.getPassword()));
        userRepo.save(user);
    }

}
