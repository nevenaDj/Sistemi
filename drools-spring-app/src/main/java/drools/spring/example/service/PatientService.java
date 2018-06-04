package drools.spring.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drools.spring.example.model.Patient;
import drools.spring.example.repository.PatientRepository;

@Service
public class PatientService {
	@Autowired
	private PatientRepository patientRepository;

	public void addPatient(Patient patient) {
		patientRepository.save(patient);
	}

}
