package tech.clusterfunk.akaflieg.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.mail.javamail.MimeMessageHelper;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.dto.EmailDTO;
import tech.clusterfunk.akaflieg.util.BasicEmailValidation;

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
        return "Akaflieg Köln e.V. Express Mail Service";
    }

    public void sendMail(EmailDTO emailDTO) {
        // Check recipient
        String recipient = "";
        if (emailDTO.getRecipient().equals("test")) {
            recipient = "jompa010@gmail.com";
        } else if (emailDTO.getRecipient().equals("info"))
            recipient = "info@akaflieg.de";

        // Check subject
        String subject = emailDTO.getSubject();
        if (subject.isEmpty())
            subject = "Kontakt via Webformular";

        // Check if sender address has email address format
        String sender = emailDTO.getSender();
        if (BasicEmailValidation.validateEmail(sender)) {
            EmailDTO mail = new EmailDTO(
                sender,
                recipient,
                emailDTO.getName(),
                subject,
                emailDTO.getMessage());

            // Create mail object
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

            logger.info("Sending mail...");
            jMailSender.send(message);
            logger.info("Done!");
        } else {
            logger.info("Invalid sender address");
        }
    }
}
