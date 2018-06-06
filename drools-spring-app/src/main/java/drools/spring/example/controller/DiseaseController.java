package drools.spring.example.controller;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.DiseaseDTO;
import drools.spring.example.model.Disease;
import drools.spring.example.service.DiseaseService;

@RestController
@RequestMapping("/api")
public class DiseaseController {
	@Autowired
	private DiseaseService diseaseService;

	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/disease")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<DiseaseDTO> addDisease(@RequestBody DiseaseDTO diseaseDTO) {
		diseaseDTO = modelMapper.map(diseaseService.addDisease(modelMapper.map(diseaseDTO, Disease.class)),
				DiseaseDTO.class);
		return new ResponseEntity<>(diseaseDTO, HttpStatus.CREATED);

	}

}
