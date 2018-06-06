package drools.spring.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.SymptomDTO;
import drools.spring.example.model.Symptom;
import drools.spring.example.service.SymptonService;

@RestController
@RequestMapping("/api")
public class SymptomController {
	@Autowired
	private SymptonService symptonService;

	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/symptom")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<SymptomDTO> addSymptom(@RequestBody SymptomDTO symptom) {
		symptom = modelMapper.map(symptonService.addSymptom(modelMapper.map(symptom, Symptom.class)), SymptomDTO.class);
		return new ResponseEntity<>(symptom, HttpStatus.CREATED);

	}

	@GetMapping("/symptom")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<SymptomDTO>> getAllSymptoms() {
		List<Symptom> symptoms = symptonService.findAllSymptoms();
		List<SymptomDTO> symptomDTOs = new ArrayList<>();
		for (Symptom symptom : symptoms) {
			symptomDTOs.add(modelMapper.map(symptom, SymptomDTO.class));
		}

		return new ResponseEntity<>(symptomDTOs, HttpStatus.OK);

	}

}
