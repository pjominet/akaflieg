package tech.clusterfunk.akaflieg.mail;

public class Email {

    private String sender;
    private String recipient;
    private String name;
    private String subject;
    private String message;
    private String phone;

    public Email(String sender, String recipient, String name, String subject, String message, String phone) {
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

    public String getFullMessage() {
        String fullMessage = "From: " + name + "\n";
        if (!phone.isEmpty())
            fullMessage += "Phone: " + phone + "\n";
        fullMessage += "\n" + message;
        return fullMessage;
    }

    @Override
    public String toString() {
        return "Email{" +
                "sender='" + sender + '\'' +
                ", recipient='" + recipient + '\'' +
                ", name='" + name + '\'' +
                ", phone='" + phone + '\'' +
                ", subject='" + subject + '\'' +
                ", message='" + message + '\'' +
                '}';
    }
}
