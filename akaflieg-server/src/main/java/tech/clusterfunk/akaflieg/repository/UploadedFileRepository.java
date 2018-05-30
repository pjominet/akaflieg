package tech.clusterfunk.akaflieg.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import tech.clusterfunk.akaflieg.entities.UploadedFile;

public interface UploadedFileRepository extends JpaRepository<UploadedFile, Long>{
}
