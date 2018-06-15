package drools.spring.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
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

	@PutMapping("/symptom")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<SymptomDTO> updateSymptom(@RequestBody SymptomDTO symptomDTO) {
		Symptom symptom = symptonService.findOne(symptomDTO.getId());
		if (symptom == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		symptom.setName(symptomDTO.getName());
		symptomDTO = modelMapper.map(symptonService.addSymptom(symptom), SymptomDTO.class);

		return new ResponseEntity<>(symptomDTO, HttpStatus.CREATED);

	}

	@GetMapping("/symptom")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_DOCTOR')")
	public ResponseEntity<List<SymptomDTO>> getAllSymptoms() {
		List<Symptom> symptoms = symptonService.findAllSymptoms();
		List<SymptomDTO> symptomDTOs = new ArrayList<>();
		for (Symptom symptom : symptoms) {
			symptomDTOs.add(modelMapper.map(symptom, SymptomDTO.class));
		}

		return new ResponseEntity<>(symptomDTOs, HttpStatus.OK);

	}

	@GetMapping("/symptom/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<SymptomDTO> getSymptom(@PathVariable Integer id) {
		Symptom symptom = symptonService.findOne(id);
		if (symptom == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		SymptomDTO symptomDTO = modelMapper.map(symptom, SymptomDTO.class);
		return new ResponseEntity<>(symptomDTO, HttpStatus.OK);
	}

	@DeleteMapping("/symptom/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteSymptom(@PathVariable Integer id) {
		if (symptonService.remove(id)) {
			return new ResponseEntity<>(HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping("/symptoms")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<SymptomDTO>> getAllSymptomsPage(Pageable page) {
		Page<Symptom> symptoms = symptonService.findAll(page);
		List<SymptomDTO> symptomDTOs = new ArrayList<>();
		for (Symptom symptom : symptoms) {
			symptomDTOs.add(modelMapper.map(symptom, SymptomDTO.class));
		}

		return new ResponseEntity<>(symptomDTOs, HttpStatus.OK);
	}

	@GetMapping("/symptoms/count")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Long> getCount() {
		Long count = symptonService.getCount();
		return new ResponseEntity<>(count, HttpStatus.OK);
	}

}
