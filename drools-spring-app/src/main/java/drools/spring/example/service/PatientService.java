package drools.spring.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import drools.spring.example.model.Patient;
import drools.spring.example.model.PatientDisease;
import drools.spring.example.model.User;
import drools.spring.example.repository.PatientDiseaseRepsoitory;
import drools.spring.example.repository.PatientRepository;

@Service
public class PatientService {

	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private PatientDiseaseRepsoitory patientDiseaseRepsoitory;

	public Patient addPatient(Patient patient) {
		return patientRepository.save(patient);
	}

	public Patient findOne(Integer id) {
		return patientRepository.getOne(id);
	}

	public List<Patient> findPatients(String search) {
		return patientRepository.findPatients(search);
	}

	public PatientDisease addPatientDisease(PatientDisease patientDisease) {
		return patientDiseaseRepsoitory.save(patientDisease);
	}

	public Page<Patient> getPatients(Pageable page, User doctor) {
		return patientRepository.getPatients(doctor.getId(), page);
	}

	public Integer getCount(User doctor) {
		return patientRepository.getPatients(doctor.getId()).size();
	}

}
