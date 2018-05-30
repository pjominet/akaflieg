package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.entities.User;
import tech.clusterfunk.akaflieg.repository.UserRepository;

import java.util.List;

@Service
public class UserService {

    private UserRepository userRepo;
    private BCryptPasswordEncoder bCryptEncoder;

    @Autowired
    public UserService(UserRepository userRepo, BCryptPasswordEncoder bCryptEncoder) {
        this.userRepo = userRepo;
        this.bCryptEncoder = bCryptEncoder;
    }

    public void register(User user) {
        user.setPassword(bCryptEncoder.encode(user.getPassword()));
        userRepo.save(user);
    }

    public List<User> listUsers() {
       return this.userRepo.findAll();
    }

    public User getUserById(long id) {
        return userRepo.findById(id);
    }
}
