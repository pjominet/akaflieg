package tech.clusterfunk.akaflieg.services;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;
import tech.clusterfunk.akaflieg.dto.FileDTO;
import tech.clusterfunk.akaflieg.entities.FileEntity;
import tech.clusterfunk.akaflieg.repository.FileRepository;

import java.io.IOException;
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

    public int storeData(FileDTO fileDTO) {

        if (fileDTO != null) {
            String filename = fileDTO.getFilename();
            LocalDateTime pubDate = fileDTO.getPubDate();
            byte[] data = fileDTO.getData().getBytes();
            String mimetype = fileDTO.getMimetype();

            FileEntity file = fileRepository.findByName(filename);

            if (!saveToDB(filename, pubDate, data, mimetype, file)) return 400;
            else return 200;
        }
        return 500;
    }

    public int storeDataFromFile(MultipartFile multipartFile) {

        try {
            String filename = multipartFile.getOriginalFilename();
            byte[] data = multipartFile.getBytes();
            String mimetype = multipartFile.getContentType();
            LocalDateTime pubDate = LocalDateTime.now(); // TODO: get date from request

            FileEntity file = fileRepository.findByName(filename);

            if (!saveToDB(filename, pubDate, data, mimetype, file)) return 400;
            else return 200;
        } catch (IOException e) {
            e.printStackTrace();
        }
        return 500;
    }

    public FileEntity getFileItem(String filename) {
        return fileRepository.findByName(filename);
    }

    private boolean saveToDB(String filename, LocalDateTime pubDate, byte[] data, String mimetype, FileEntity file) {
        LocalDateTime modDate;
        LocalDateTime creationDate;

        if (file != null) {
            if (!Arrays.equals(file.getData(), data) &&
                file.getLastModified().isBefore(modDate = LocalDateTime.now())) {
                file.setLastModified(modDate);
                file.setData(data);
                file.setPublicationDateTime(pubDate);
                fileRepository.save(file);
            } else return false; // no content modification from user
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
        return true;
    }
}
