package tech.clusterfunk.akaflieg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.clusterfunk.akaflieg.entities.AkaUser;

public interface UserRepository extends JpaRepository<AkaUser, Long> {

    AkaUser findByUsername(String username);

    AkaUser findById(long id);

}
