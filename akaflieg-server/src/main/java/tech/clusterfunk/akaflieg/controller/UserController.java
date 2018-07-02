package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.clusterfunk.akaflieg.entities.UserEntity;
import tech.clusterfunk.akaflieg.services.UserService;

import java.util.List;

import static tech.clusterfunk.akaflieg.util.RestURIs.USER_URI;

@RestController
@RequestMapping(USER_URI)
public class UserController {

    private UserService userService;

    @Autowired
    public UserController(UserService userService) {
        this.userService = userService;
    }

    @GetMapping
    public List<UserEntity> listUsers() {
        return userService.listUsers();
    }

    @GetMapping("/{id}")
    public UserEntity getUserById(@PathVariable long id) {
        return userService.getUserById(id);
    }

    @PostMapping("/register")
    public void register(@RequestBody UserEntity user) {
        userService.register(user);
    }
}
