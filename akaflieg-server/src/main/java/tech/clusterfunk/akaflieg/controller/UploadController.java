package tech.clusterfunk.akaflieg.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import tech.clusterfunk.akaflieg.dto.FileDTO;
import tech.clusterfunk.akaflieg.entities.FileEntity;
import tech.clusterfunk.akaflieg.services.UploadService;

import java.util.List;

import static tech.clusterfunk.akaflieg.util.RestURIs.FILE_URI;

@RestController
@RequestMapping(FILE_URI)
public class UploadController {

    private UploadService uploadService;

    @Autowired
    public UploadController(UploadService uploadService) {
        this.uploadService = uploadService;
    }

    @GetMapping
    @ResponseBody
    public ResponseEntity<?> listFiles() {
        List<FileEntity> files = uploadService.getFiles();

        if (files != null && !files.isEmpty()) {
            return ResponseEntity.ok().body(files);
        } else return new ResponseEntity<>(HttpStatus.NOT_FOUND);
    }

    @GetMapping("/type")
    @ResponseBody
    public ResponseEntity<?> listFilesByMimetype(@RequestHeader("Content-Type") String mimetype) {
        List<FileEntity> files = uploadService.getFilesByMimetype(mimetype);

        if (files != null && !files.isEmpty()) {
            return ResponseEntity.ok().body(files);
        } else return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @GetMapping("/download/{filename}")
    @ResponseBody
    public ResponseEntity<?> downloadFile(@PathVariable String filename) {
        FileEntity file = uploadService.getFileItem(filename);

        if (file != null) {
            return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + file.getName() + "\"")
                .body(file);
        } else return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }

    @PostMapping("/upload/data")
    public ResponseEntity<?> handleFormUpload(@RequestBody FileDTO fileDTO) {
        int status = uploadService.storeData(fileDTO);
        return getResponseEntity(status);
    }

    @PostMapping("/upload/file")
    public ResponseEntity<?> handleFileUpload(@RequestParam("cmsFile") MultipartFile file) {
        int status = uploadService.storeDataFromFile(file);
        return getResponseEntity(status);
    }

    private ResponseEntity<?> getResponseEntity(int status) {
        if (status == 200) return new ResponseEntity<>(HttpStatus.OK);
        else if (status == 400) return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        else return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
