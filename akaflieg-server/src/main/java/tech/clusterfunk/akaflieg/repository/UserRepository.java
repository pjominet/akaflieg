package tech.clusterfunk.akaflieg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.clusterfunk.akaflieg.entities.UserEntity;

import java.util.List;

public interface UserRepository extends JpaRepository<UserEntity, Long> {

    UserEntity findByUsername(String username);

    UserEntity findById(long id);

    List<UserEntity> findAll();

}
