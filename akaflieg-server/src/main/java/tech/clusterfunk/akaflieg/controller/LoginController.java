package tech.clusterfunk.akaflieg.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {

    @RequestMapping("/auth")
    public String login(){
        return "login";
    }
}
