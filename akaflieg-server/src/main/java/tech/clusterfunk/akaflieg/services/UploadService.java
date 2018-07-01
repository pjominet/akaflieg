package tech.clusterfunk.akaflieg.services;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.core.io.Resource;
import org.springframework.core.io.UrlResource;
import org.springframework.stereotype.Service;
import org.springframework.util.StringUtils;
import org.springframework.web.multipart.MultipartFile;
import tech.clusterfunk.akaflieg.repository.StorageConfig;
import tech.clusterfunk.akaflieg.entities.UploadedFile;
import tech.clusterfunk.akaflieg.repository.FileRepository;
import tech.clusterfunk.akaflieg.util.StorageException;
import tech.clusterfunk.akaflieg.util.StorageFileNotFoundException;

import java.io.IOException;
import java.io.InputStream;
import java.net.MalformedURLException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;
import java.util.stream.Stream;

@Service
public class UploadService {

    private Logger logger = LoggerFactory.getLogger(this.getClass());

    private FileRepository fileRepository;
    private Path rootLocation;

    @Autowired
    public UploadService(FileRepository fileRepository, StorageConfig storageConfig) {
        this.fileRepository = fileRepository;
        this.rootLocation = Paths.get(storageConfig.getLocation());
    }

    private Path load(String filename) {
        return rootLocation.resolve(filename);
    }

    /**
     * Store files in DB
     * @param file to be stored
     */
    public void storeFile(MultipartFile file) throws StorageException {
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            fileRepository.save(new UploadedFile(filename, file.getBytes()));
        } catch (IOException e) {
            logger.error("Failed to store file " + filename);
            throw new StorageException("Failed to store file " + filename, e);
        }
    }

    /**
     * Save file on running system
     * @param file to be saved
     */
    public void saveFile(MultipartFile file) throws StorageException {
        String filename = StringUtils.cleanPath(file.getOriginalFilename());
        try {
            if (file.isEmpty()) {
                logger.error("Failed to store empty file " + filename);
                throw new StorageException("Failed to store empty file " + filename);
            }
            // This is a security check
            if (filename.contains("..")) {
                logger.error("Cannot store file with relative path outside current directory " + filename);
                throw new StorageException("Cannot store file with relative path outside current directory " + filename);
            }
            try (InputStream inputStream = file.getInputStream()) {
                Files.copy(inputStream, this.rootLocation.resolve(filename), StandardCopyOption.REPLACE_EXISTING);
            }
        } catch (IOException e) {
            logger.error("Failed to save file " + filename);
            throw new StorageException("Failed to save file " + filename, e);
        }
    }

    /**
     * Show files saved on running system
     * @return filestream
     */
    public Stream<Path> showFileList() throws StorageException {
        try {
            return Files.walk(this.rootLocation, 1)
                    .filter(path -> !path.equals(this.rootLocation))
                    .map(this.rootLocation::relativize);
        } catch (IOException e) {
            logger.error("Failed to read stored files");
            throw new StorageException("Failed to read stored files", e);
        }
    }

    public Resource getAsResource(String filename) throws StorageFileNotFoundException {
        try {
            Path file = load(filename);
            Resource resource = new UrlResource(file.toUri());
            if (resource.exists() || resource.isReadable())
                return resource;
            else {
                logger.error("Could not read file: " + filename);
                throw new StorageFileNotFoundException("Could not read file: " + filename);
            }
        }
        catch (MalformedURLException e) {
            logger.error("Could not read file: " + filename);
            throw new StorageFileNotFoundException("Could not read file: " + filename, e);
        }
    }
}
