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

import drools.spring.example.dto.PatientDTO;
import drools.spring.example.model.Patient;
import drools.spring.example.service.PatientService;

@RestController
@RequestMapping("/api")
public class PatientController {

	@Autowired
	private PatientService patientService;

	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/patient")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<Void> addUser(@RequestBody PatientDTO patient) {
		patientService.addPatient(modelMapper.map(patient, Patient.class));
		return new ResponseEntity<>(HttpStatus.CREATED);

	}

}
