package tech.clusterfunk.akaflieg.repository;

import org.springframework.boot.context.properties.ConfigurationProperties;

@ConfigurationProperties("storage")
public class StorageConfig {

    // TODO set correct path (on application load?)
    /**
     * location in filesystem
     */
    private String location = "/var/local/something";

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }
}
