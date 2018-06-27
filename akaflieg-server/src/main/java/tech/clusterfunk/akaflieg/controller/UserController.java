package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.clusterfunk.akaflieg.entities.User;
import tech.clusterfunk.akaflieg.services.UserService;

import java.util.List;

import static tech.clusterfunk.akaflieg.controller.RestURIs.USER_LIST_URI;

@RestController
@RequestMapping(USER_LIST_URI)
public class UserController {

  private UserService userService;

  @Autowired
  public UserController(UserService userService) {
    this.userService = userService;
  }

  @GetMapping
  public List<User> listUsers() {
    return userService.listUsers();
  }

  @GetMapping("/{id}")
  public User getUserById(@PathVariable long id) {
    return userService.getUserById(id);
  }

  @PostMapping("/register")
  public void register(@RequestBody User user) {
    userService.register(user);
  }
}
