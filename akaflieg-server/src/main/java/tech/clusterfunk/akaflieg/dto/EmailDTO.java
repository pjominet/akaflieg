package tech.clusterfunk.akaflieg.dto;

public class EmailDTO {

    private String sender;
    private String recipient;
    private String name;
    private String subject;
    private String message;
    private String phone;

    public EmailDTO() {}

    public EmailDTO(String sender, String recipient, String name, String subject, String message, String phone) {
        this.sender = sender;
        this.recipient = recipient;
        this.name = name;
        this.subject = subject;
        this.message = message;
        this.phone = phone;
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

    public String getPhone() {
        return phone;
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

    public void setPhone(String phone) {
        this.phone = phone;
    }

    public String getFullMessage() {
        String fullMessage = "From: " + name + "\n";
        if (!phone.isEmpty())
            fullMessage += "Phone: " + phone + "\n";
        fullMessage += "\n" + message;
        return fullMessage;
    }

    @Override
    public String toString() {
        return "EmailDTO {" +
                "sender='" + sender + '\'' +
                ", recipient='" + recipient + '\'' +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", subject='" + subject + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
