package drools.spring.example.controller;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;

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
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.AllergyComponentDTO;
import drools.spring.example.dto.AllergyCureDTO;
import drools.spring.example.dto.CureDTO;
import drools.spring.example.dto.DiseaseDTO;
import drools.spring.example.dto.PatientDTO;
import drools.spring.example.dto.PatientDiseaseDTO;
import drools.spring.example.dto.UserResponseDTO;
import drools.spring.example.model.AllergyComponent;
import drools.spring.example.model.AllergyCure;
import drools.spring.example.model.Component;
import drools.spring.example.model.Cure;
import drools.spring.example.model.Disease;
import drools.spring.example.model.Patient;
import drools.spring.example.model.PatientCure;
import drools.spring.example.model.PatientDisease;
import drools.spring.example.model.User;
import drools.spring.example.security.jwt.JwtTokenProvider;
import drools.spring.example.service.AllergyService;
import drools.spring.example.service.CureService;
import drools.spring.example.service.DiseaseService;
import drools.spring.example.service.PatientService;
import drools.spring.example.service.UserService;

@RestController
@RequestMapping("/api")
public class PatientController {

	@Autowired
	private PatientService patientService;

	@Autowired
	private DiseaseService diseaseService;

	@Autowired
	private CureService cureService;

	@Autowired
	private UserService userService;

	@Autowired
	private AllergyService allergyService;

	@Autowired
	private ModelMapper modelMapper;

	@Autowired
	private JwtTokenProvider jwtTokenProvider;

	@PostMapping("/patient")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<PatientDTO> addUser(@RequestBody PatientDTO patientDTO, HttpServletRequest req) {
		Patient patient = modelMapper.map(patientDTO, Patient.class);

		User user = userService.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));

		if (user == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		patient.setDoctor(user);

		patientDTO = modelMapper.map(patientService.addPatient(patient), PatientDTO.class);
		return new ResponseEntity<>(patientDTO, HttpStatus.CREATED);

	}

	@GetMapping(value = "/patients/all")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<List<PatientDTO>> getPatients(Pageable page, HttpServletRequest req) {
		User user = userService.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));

		if (user == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		Page<Patient> patients = patientService.getPatients(page, user);

		List<PatientDTO> patientDTOs = new ArrayList<>();
		for (Patient patient : patients) {
			patientDTOs.add(modelMapper.map(patient, PatientDTO.class));
		}

		return new ResponseEntity<>(patientDTOs, HttpStatus.OK);
	}

	@GetMapping("/patients/all/count")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<Integer> getCount(HttpServletRequest req) {
		User user = userService.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));

		if (user == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
		Integer count = patientService.getCount(user);
		return new ResponseEntity<>(count, HttpStatus.OK);
	}

	@GetMapping("/patient/{id}")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
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

	@PostMapping("/patient/{id}/disease")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<Integer> addPatientDisease(@PathVariable Integer id, @RequestBody DiseaseDTO diseaseDTO,
			HttpServletRequest req) {
		Patient patient = patientService.findOne(id);

		if (patient == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		User user = userService.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));

		if (user == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		Disease disease = modelMapper.map(diseaseDTO, Disease.class);
		PatientDisease patientDisease = new PatientDisease(patient, disease, user);
		patientDisease = patientService.addPatientDisease(patientDisease);
		return new ResponseEntity<>(patientDisease.getId(), HttpStatus.OK);
	}

	@GetMapping("/patient/{id}/diseases")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<List<PatientDiseaseDTO>> getPatientDiseases(@PathVariable Integer id) {
		List<PatientDisease> patientDiseases = diseaseService.getPatientDiseases(id);
		DateFormat df = new SimpleDateFormat("dd/MM/yyyy HH:mm");

		List<PatientDiseaseDTO> patientDiseaseDTOs = new ArrayList<>();
		for (PatientDisease patientDisease : patientDiseases) {
			String date = df.format(patientDisease.getDate());
			DiseaseDTO diseaseDTO = modelMapper.map(patientDisease.getDisease(), DiseaseDTO.class);
			UserResponseDTO doctor = modelMapper.map(patientDisease.getDoctor(), UserResponseDTO.class);

			List<PatientCure> patientCures = cureService.getPatientCures(patientDisease.getId());

			List<CureDTO> cureDTOs = new ArrayList<>();
			for (PatientCure patientCure : patientCures) {
				cureDTOs.add(modelMapper.map(patientCure.getCure(), CureDTO.class));
			}
			patientDiseaseDTOs.add(new PatientDiseaseDTO(patientDisease.getId(), diseaseDTO, doctor,
					patientDisease.getDate(), cureDTOs));

		}

		return new ResponseEntity<>(patientDiseaseDTOs, HttpStatus.OK);
	}

	@PostMapping("/patient/{id}/diagnosis/{idD}/therapy")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<Integer> addPatientCure(@PathVariable("id") Integer id, @PathVariable("idD") Integer idD,
			@RequestBody List<CureDTO> cureDTOs, HttpServletRequest req) {
		Patient patient = patientService.findOne(id);

		if (patient == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		PatientDisease patientDisease = diseaseService.findPatientDisease(idD);

		if (patientDisease == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		List<Cure> cures = new ArrayList<>();
		for (CureDTO cureDTO : cureDTOs) {
			cures.add(modelMapper.map(cureDTO, Cure.class));
		}

		User user = userService.findByUsername(jwtTokenProvider.getUsername(jwtTokenProvider.resolveToken(req)));

		if (user == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		boolean alergic = cureService.addPatientCure(cures, patient, patientDisease, user);

		if (alergic) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(HttpStatus.OK);
	}

	@GetMapping("/patient/{id}/allergy/cure")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<List<AllergyCureDTO>> getAllergyCure(@PathVariable("id") Integer id) {
		List<AllergyCure> alergicCures = allergyService.getAlergicCuresForPatient(id);

		List<AllergyCureDTO> allergyCureDTOs = new ArrayList<>();
		for (AllergyCure allergyCure : alergicCures) {
			AllergyCureDTO allergyCureDTO = modelMapper.map(allergyCure, AllergyCureDTO.class);
			allergyCureDTO.setCure(modelMapper.map(allergyCure.getCure(), CureDTO.class));
			allergyCureDTOs.add(allergyCureDTO);

		}

		return new ResponseEntity<>(allergyCureDTOs, HttpStatus.OK);
	}

	@GetMapping("/patient/{id}/allergy/component")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<List<AllergyComponentDTO>> getAllergyComponent(@PathVariable("id") Integer id) {
		List<AllergyComponent> alergicComponents = allergyService.getAlergicComponentsForPatient(id);

		List<AllergyComponentDTO> allergyComponentDTOs = new ArrayList<>();
		for (AllergyComponent allergyComponent : alergicComponents) {
			allergyComponentDTOs.add(modelMapper.map(allergyComponent, AllergyComponentDTO.class));

		}

		return new ResponseEntity<>(allergyComponentDTOs, HttpStatus.OK);
	}

	@PostMapping("/patient/{id}/allergy/cure")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<Void> addAllergyCure(@PathVariable("id") Integer id,
			@RequestBody AllergyCureDTO allergyCureDTO) {
		Patient patient = patientService.findOne(id);

		if (patient == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		AllergyCure allergyCure = modelMapper.map(allergyCureDTO, AllergyCure.class);
		allergyCure.setCure(modelMapper.map(allergyCure.getCure(), Cure.class));
		allergyCure.setPatient(patient);
		if (!allergyService.addAllergyCure(allergyCure)) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(HttpStatus.OK);
	}

	@PostMapping("/patient/{id}/allergy/component")
	@PreAuthorize("hasRole('ROLE_DOCTOR')")
	public ResponseEntity<Void> addAllergyComponent(@PathVariable("id") Integer id,
			@RequestBody AllergyComponentDTO allergyComponentDTO) {

		Patient patient = patientService.findOne(id);

		if (patient == null) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		AllergyComponent allergyComponent = modelMapper.map(allergyComponentDTO, AllergyComponent.class);
		allergyComponent.setComponent(modelMapper.map(allergyComponent.getComponent(), Component.class));
		allergyComponent.setPatient(patient);

		if (!allergyService.addAllergyComponent(allergyComponent)) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

		return new ResponseEntity<>(HttpStatus.OK);
	}

}
