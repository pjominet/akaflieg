package tech.clusterfunk.akaflieg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.clusterfunk.akaflieg.entities.User;

import java.util.List;

public interface UserRepository extends JpaRepository<User, Long> {

    User findByUsername(String username);

    User findById(long id);

    List<User> findAll();

}
