package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;
import tech.clusterfunk.akaflieg.services.UploadService;

import static tech.clusterfunk.akaflieg.util.RestURIs.UPLOAD_URI;

@RestController
@RequestMapping(UPLOAD_URI)
public class UploadController {

    private UploadService uploadService;

    @Autowired
    public UploadController(UploadService uploadService) {
        this.uploadService = uploadService;
    }

    @PostMapping(value = "{filename}", consumes = "multipart/form-data")
    public void uploadFile(@PathVariable("filename") String filename, MultipartFile file) {
        uploadService.uploadFile(filename, file);
    }
}
