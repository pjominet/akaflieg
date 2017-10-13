package tech.clusterfunk.akaflieg.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.mail.Email;

import javax.mail.MessagingException;
import javax.mail.internet.MimeMessage;

@Service
public class MailService {
    private Logger logger = LoggerFactory.getLogger(this.getClass());

    public String info() {
        return "Your carrier pigeon is ready for takeoff.";
    }

    public void sendMail(Email email, JavaMailSender sender) {
        // Create Mail
        Email mail = new Email(
                email.getSender(),
                email.getRecipient(),
                email.getName(),
                email.getSubject(),
                email.getMessage(),
                email.getPhone());

        // Create a default MimeMessage object.
        MimeMessage message = sender.createMimeMessage();
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
        sender.send(message);
        logger.info("Done!");
    }
}
