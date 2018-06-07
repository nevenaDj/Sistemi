package drools.spring.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drools.spring.example.model.Patient;
import drools.spring.example.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;

	public Patient addPatient(Patient patient) {
		return patientRepository.save(patient);
	}

	public Patient findOne(Integer id) {
		return patientRepository.getOne(id);
	}

}
