package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;
import tech.clusterfunk.akaflieg.mail.Email;
import tech.clusterfunk.akaflieg.services.MailService;

@RestController("/mail")
public class MailController {

    private MailService mailService;

    @Autowired
    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    @GetMapping
    public String info() {
        return mailService.info();
    }

    @PostMapping
    public void sendMail(@RequestBody Email email) {
       mailService.sendMail(email);
    }
}
