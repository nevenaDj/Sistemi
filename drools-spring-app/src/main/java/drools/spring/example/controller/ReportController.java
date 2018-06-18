package drools.spring.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.PatientDTO;
import drools.spring.example.model.Patient;
import drools.spring.example.service.ReportService;

@RestController
@RequestMapping("/api")
public class ReportController {

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private ReportService reportService;

	@GetMapping("/report1")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<List<PatientDTO>> getReport1() {

		List<Patient> patients = reportService.getReport1();

		if (patients.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		List<PatientDTO> patientDTOs = new ArrayList<>();
		for (Patient patient : patients) {
			patientDTOs.add(modelMapper.map(patient, PatientDTO.class));
		}

		return new ResponseEntity<>(patientDTOs, HttpStatus.OK);
	}

	@GetMapping("/report2")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<List<PatientDTO>> getReport2() {

		List<Patient> patients = reportService.getReport2();

		if (patients.isEmpty()) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		List<PatientDTO> patientDTOs = new ArrayList<>();
		for (Patient patient : patients) {
			patientDTOs.add(modelMapper.map(patient, PatientDTO.class));
		}

		return new ResponseEntity<>(patientDTOs, HttpStatus.OK);
	}

	@GetMapping("/report3")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<List<PatientDTO>> getReport3() {
		List<Patient> patients = reportService.getReport3();

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
