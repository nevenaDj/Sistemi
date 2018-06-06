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

import drools.spring.example.dto.CureDTO;
import drools.spring.example.model.Cure;
import drools.spring.example.service.CureService;

@RestController
@RequestMapping("/api")
public class CureController {

	@Autowired
	private CureService cureService;

	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/cure")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<CureDTO> addCure(@RequestBody CureDTO cure) {
		cure = modelMapper.map(cureService.addCure(modelMapper.map(cure, Cure.class)), CureDTO.class);
		return new ResponseEntity<>(cure, HttpStatus.CREATED);

	}

}
