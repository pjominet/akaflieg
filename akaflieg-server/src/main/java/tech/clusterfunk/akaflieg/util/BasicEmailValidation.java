package tech.clusterfunk.akaflieg.util;

import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class BasicEmailValidation {
    private static final Pattern VALID_EMAIL_ADDRESS_REGEX =
        Pattern.compile("^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\\.[a-zA-Z0-9-]+)$", Pattern.CASE_INSENSITIVE);

    public static boolean validateEmail(String emailAddress) {
        Matcher matcher = VALID_EMAIL_ADDRESS_REGEX.matcher(emailAddress);
        return matcher.find();
    }
}
