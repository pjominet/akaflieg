package tech.clusterfunk.akaflieg.dto;

public class EmailDTO {

    private String sender;
    private String recipient;
    private String name;
    private String subject;
    private String message;

    public EmailDTO() {}

    public EmailDTO(String sender, String recipient, String name, String subject, String message) {
        this.sender = sender;
        this.recipient = recipient;
        this.name = name;
        this.subject = subject;
        this.message = message;
    }

    public String getSender() {
        return sender;
    }

    public String getRecipient() {
        return recipient;
    }

    public String getName() {
        return name;
    }

    public String getSubject() {
        return subject;
    }

    public String getMessage() {
        return message;
    }

    public void setSender(String sender) {
        this.sender = sender;
    }

    public void setRecipient(String recipient) {
        this.recipient = recipient;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public String getFullMessage() {
        String fullMessage = "From: " + name + "\n";
        fullMessage += "\n" + message;
        return fullMessage;
    }

    @Override
    public String toString() {
        return "EmailDTO {" +
                "sender='" + sender + '\'' +
                ", recipient='" + recipient + '\'' +
                ", name='" + name + '\'' +
                ", subject='" + subject + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
