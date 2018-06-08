package drools.spring.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
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
	public ResponseEntity<PatientDTO> addUser(@RequestBody PatientDTO patient) {
		patient = modelMapper.map(patientService.addPatient(modelMapper.map(patient, Patient.class)), PatientDTO.class);
		return new ResponseEntity<>(patient, HttpStatus.CREATED);

	}

	@GetMapping("/patient/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<PatientDTO> getPatient(@PathVariable Integer id) {
		Patient patient = patientService.findOne(id);
		if (patient == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		PatientDTO patientDTO = modelMapper.map(patient, PatientDTO.class);
		return new ResponseEntity<>(patientDTO, HttpStatus.OK);
	}

	@GetMapping(value = "/patients", params = { "search" })
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<List<PatientDTO>> findPatients(@RequestParam("search") String search) {
		List<Patient> patients = patientService.findPatients(search);
		if (patients.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		List<PatientDTO> patientDTOs = new ArrayList<>();
		for (Patient patient : patients) {
			patientDTOs.add(modelMapper.map(patient, PatientDTO.class));
		}

		return new ResponseEntity<>(patientDTOs, HttpStatus.OK);
	}

}
