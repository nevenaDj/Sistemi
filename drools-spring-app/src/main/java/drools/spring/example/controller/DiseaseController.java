package drools.spring.example.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.DiseaseDTO;
import drools.spring.example.dto.SymptomDTO;
import drools.spring.example.model.Disease;
import drools.spring.example.model.DiseaseSymptom;
import drools.spring.example.model.Symptom;
import drools.spring.example.service.DiseaseService;
import drools.spring.example.service.SymptonService;

@RestController
@RequestMapping("/api")
public class DiseaseController {
	@Autowired
	private DiseaseService diseaseService;

	@Autowired
	private SymptonService symptomService;

	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/disease")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<DiseaseDTO> addDisease(@RequestBody DiseaseDTO diseaseDTO) {
		Disease disease = new Disease(diseaseDTO.getId(), diseaseDTO.getName());

		diseaseService.addDisease(disease);

		for (SymptomDTO symptomDTO : diseaseDTO.getSymptoms()) {
			Symptom symptom = modelMapper.map(symptomDTO, Symptom.class);

			DiseaseSymptom diseaseSymptom = new DiseaseSymptom(disease, symptom);
			symptomService.addDiseaseSymptom(diseaseSymptom);

		}
		return new ResponseEntity<>(diseaseDTO, HttpStatus.CREATED);
	}

	@PutMapping("/disease")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<DiseaseDTO> updateDisease(@RequestBody DiseaseDTO diseaseDTO) {
		Disease disease = diseaseService.findOne(diseaseDTO.getId());
		if (disease == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		disease.setName(diseaseDTO.getName());

		Set<Symptom> symptoms = new HashSet<>();
		for (SymptomDTO symptom : diseaseDTO.getSymptoms()) {
			symptoms.add(modelMapper.map(symptom, Symptom.class));
		}

		// disease.setSymptoms(symptoms);

		diseaseDTO = modelMapper.map(diseaseService.addDisease(disease), DiseaseDTO.class);

		return new ResponseEntity<>(diseaseDTO, HttpStatus.CREATED);

	}

	@GetMapping("/disease/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<DiseaseDTO> getDisease(@PathVariable Integer id) {
		Disease disease = diseaseService.findOne(id);
		if (disease == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		DiseaseDTO diseaseDTO = modelMapper.map(disease, DiseaseDTO.class);
		return new ResponseEntity<>(diseaseDTO, HttpStatus.OK);
	}

	@GetMapping("/diseases")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<DiseaseDTO>> getAllDiseasePage(Pageable page) {
		Page<Disease> diseases = diseaseService.findAll(page);
		List<DiseaseDTO> diseaseDTOs = new ArrayList<>();
		for (Disease disease : diseases) {
			DiseaseDTO diseaseDTO = modelMapper.map(disease, DiseaseDTO.class);
			List<Symptom> symptoms = symptomService.getSymptoms(disease.getId());
			Set<SymptomDTO> symptomDTOs = new HashSet<>();

			for (Symptom symptom : symptoms) {
				symptomDTOs.add(modelMapper.map(symptom, SymptomDTO.class));
			}

			diseaseDTO.setSymptoms(symptomDTOs);
			diseaseDTOs.add(diseaseDTO);

		}

		return new ResponseEntity<>(diseaseDTOs, HttpStatus.OK);
	}

	@GetMapping("/diseases/count")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Long> getCount() {
		Long count = diseaseService.getCount();
		return new ResponseEntity<>(count, HttpStatus.OK);
	}

}
