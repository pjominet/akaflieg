package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tech.clusterfunk.akaflieg.entities.AkaUser;
import tech.clusterfunk.akaflieg.repository.UserRepository;
import tech.clusterfunk.akaflieg.services.LoginService;

@RestController("/user")
public class LoginController {

    private LoginService loginService;
    private UserRepository userRepo;
    private BCryptPasswordEncoder bCryptEncoder;


    @Autowired
    public LoginController(LoginService loginService, UserRepository userRepo, BCryptPasswordEncoder bCryptEncoder) {
        this.loginService = loginService;
        this.userRepo = userRepo;
        this.bCryptEncoder = bCryptEncoder;
    }

    @GetMapping("/auth")
    public String login(){
        return loginService.login();
    }

    @PostMapping("/register")
    public void register(@RequestBody AkaUser user){
        user.setPassword(bCryptEncoder.encode(user.getPassword()));
        userRepo.save(user);
    }
}
