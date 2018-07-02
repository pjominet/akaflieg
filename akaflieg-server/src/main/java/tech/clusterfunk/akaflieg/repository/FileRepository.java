package tech.clusterfunk.akaflieg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.clusterfunk.akaflieg.entities.FileEntity;

import java.util.List;

public interface FileRepository extends JpaRepository<FileEntity, Long> {
    FileEntity findByName(String name);

    FileEntity findById(long id);

    List<FileEntity> findAll();

    List<FileEntity> findAllByMimetype(String mimetye);

    FileEntity findLastModifiedAndByMimetype(String mimetype);
}
