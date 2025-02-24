package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import tech.clusterfunk.akaflieg.dto.EmailDTO;
import tech.clusterfunk.akaflieg.services.MailService;

import static tech.clusterfunk.akaflieg.util.RestURIs.MAIL_URI;

@RestController
@RequestMapping(MAIL_URI)
public class MailController {

    private MailService mailService;

    @Autowired
    public MailController(MailService mailService) {
        this.mailService = mailService;
    }

    @GetMapping("/info")
    public String info() {
        return mailService.info();
    }

    @PostMapping("/send")
    public void sendMail(@RequestBody EmailDTO emailDTO) {
        mailService.sendMail(emailDTO);
    }
}
