package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import tech.clusterfunk.akaflieg.entities.FileEntity;
import tech.clusterfunk.akaflieg.repository.FileRepository;
import tech.clusterfunk.akaflieg.util.StorageException;

import java.io.IOException;
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

    public void storeFile(MultipartFile file) throws StorageException {
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            fileRepository.save(new FileEntity(filename, file.getBytes(), file.getContentType()));
        } catch (IOException e) {
            throw new StorageException("Failed to store file " + filename, e);
        }
    }

    public FileEntity getFileItem(String filename) {
        return fileRepository.findByName(filename);
    }
}
