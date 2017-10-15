package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.web.bind.annotation.*;
import tech.clusterfunk.akaflieg.entities.AkaUser;
import tech.clusterfunk.akaflieg.repository.UserRepository;
import tech.clusterfunk.akaflieg.services.LoginService;

@RestController
@RequestMapping("/user")
public class LoginController {

    private LoginService loginService;

    @Autowired
    public LoginController(LoginService loginService) {
        this.loginService = loginService;
    }

    @PostMapping("/register")
    public void register(@RequestBody AkaUser user) {
        loginService.register(user);
    }
}
