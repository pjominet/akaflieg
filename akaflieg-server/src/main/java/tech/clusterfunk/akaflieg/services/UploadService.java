package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import tech.clusterfunk.akaflieg.dto.FileDTO;
import tech.clusterfunk.akaflieg.entities.FileEntity;
import tech.clusterfunk.akaflieg.repository.FileRepository;

import java.time.LocalDateTime;
import java.util.Arrays;
import java.util.List;

@Service
public class UploadService {

    private FileRepository fileRepository;

    @Autowired
    public UploadService(FileRepository fileRepository) {
        this.fileRepository = fileRepository;
    }

    public List<FileEntity> getFiles() {
        return fileRepository.findAll();
    }

    public List<FileEntity> getFilesByMimetype(String mimetype) {
        return fileRepository.findAllByMimetype(mimetype);
    }

    public FileEntity getLastModifiedByMimetype(String mimetype) {
        return fileRepository.findLastModifiedAndByMimetype(mimetype);
    }

    public int storeFile(FileDTO fileDTO) {

        if (fileDTO != null) {
            String filename = fileDTO.getFilename();
            LocalDateTime pubDate = fileDTO.getPubDate();
            byte[] data = fileDTO.getData().getBytes();
            String mimetype = fileDTO.getMimetype();
            LocalDateTime creationDate;
            LocalDateTime modDate;

            FileEntity file = fileRepository.findByName(filename);

            if (file != null) {
                if (!Arrays.equals(file.getData(), data) &&
                    file.getLastModified().isBefore(modDate = LocalDateTime.now())) {
                    file.setLastModified(modDate);
                    file.setData(data);
                    file.setPublicationDateTime(pubDate);
                    fileRepository.save(file);
                } else return 400; // no modification
            } else {
                fileRepository.save(new FileEntity(
                    filename,
                    data,
                    mimetype,
                    pubDate,
                    creationDate = LocalDateTime.now(),
                    modDate = creationDate
                ));
            }
            return 200;
        }
        return 500;
    }

    public FileEntity getFileItem(String filename) {
        return fileRepository.findByName(filename);
    }
}
