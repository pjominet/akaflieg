package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.clusterfunk.akaflieg.entities.AkaUser;
import tech.clusterfunk.akaflieg.services.UserService;

import java.util.List;

@RestController
@RequestMapping("/user")
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public void register(@RequestBody AkaUser user) {
        userService.register(user);
    }

    @GetMapping
    public List<AkaUser> listUsers() {
        return userService.listUsers();
    }

    @GetMapping("/{id}")
    public AkaUser getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }
}
