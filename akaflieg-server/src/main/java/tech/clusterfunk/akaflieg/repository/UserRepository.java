package tech.clusterfunk.akaflieg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.clusterfunk.akaflieg.entities.AkaUser;

import java.util.List;

public interface UserRepository extends JpaRepository<AkaUser, Long> {

    AkaUser findByUsername(String username);

    AkaUser findById(long id);

    List<AkaUser> findAll();

}
