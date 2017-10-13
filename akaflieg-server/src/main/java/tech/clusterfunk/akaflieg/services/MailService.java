package tech.clusterfunk.akaflieg.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.mail.Email;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class MailService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());
    private JavaMailSender jMailSender;

    @Autowired
    public MailService(JavaMailSender jMailSender) {
        this.jMailSender = jMailSender;
    }

    public String info() {
        return "Akaflieg Köln e.V. Express Mail Service.\n" +
                "Your ePigeon is ready for takeoff.";
    }

    public void sendMail(Email email) {
        // Create Mail
        String recipient = "";
        if (email.getRecipient().equals("test")) {
            recipient = "jompa010@gmail.com";
        } else if (email.getRecipient().equals("live"))
            recipient = "info@akaflieg.de";

        Email mail = new Email(
                email.getSender(),
                recipient,
                email.getName(),
                email.getSubject(),
                email.getMessage(),
                email.getPhone());

        // Create a default MimeMessage object.
        MimeMessage message = jMailSender.createMimeMessage();
        MimeMessageHelper helper = new MimeMessageHelper(message);

        // Create message
        try {
            helper.setFrom(mail.getSender());
            helper.setTo(mail.getRecipient());
            helper.setSubject(mail.getSubject());
            helper.setText(mail.getFullMessage());
        } catch (MessagingException mex) {
            logger.error(mex.toString());
            mex.printStackTrace();
        }

        logger.info("Sending...");
        jMailSender.send(message);
        logger.info("Done!");
    }
}
