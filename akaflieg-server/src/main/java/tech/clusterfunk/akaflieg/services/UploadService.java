package tech.clusterfunk.akaflieg.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tech.clusterfunk.akaflieg.entities.UploadedFile;
import tech.clusterfunk.akaflieg.repository.UploadedFileRepository;

import java.io.IOException;

@Service
public class UploadService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private UploadedFileRepository uploadFileRepository;

    @Autowired
    public UploadService(UploadedFileRepository uploadFileRepository) {
        this.uploadFileRepository = uploadFileRepository;
    }

    public void uploadFile(String filename, MultipartFile file) {
        try {
            uploadFileRepository.save(new UploadedFile(filename, file.getBytes()));
        } catch (IOException e) {
            logger.error("Error while processing uploaded file");
            logger.error(e.getMessage());
            e.printStackTrace();
        }
    }
}
