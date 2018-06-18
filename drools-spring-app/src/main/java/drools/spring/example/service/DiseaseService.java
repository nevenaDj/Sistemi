package drools.spring.example.service;

import java.util.List;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import drools.spring.example.model.Disease;
import drools.spring.example.model.DiseaseSymptom;
import drools.spring.example.model.Patient;
import drools.spring.example.model.PatientCure;
import drools.spring.example.model.PatientDisease;
import drools.spring.example.model.SelectedDisease;
import drools.spring.example.model.Symptom;
import drools.spring.example.repository.DiseaseRepository;
import drools.spring.example.repository.PatientCureRepository;
import drools.spring.example.repository.PatientDiseaseRepsoitory;

@Service
public class DiseaseService {

	@Autowired
	private DiseaseRepository diseaseRepository;

	@Autowired
	private PatientDiseaseRepsoitory patientDiseaseRepository;

	@Autowired
	private PatientCureRepository patientCureRepository;

	@Autowired
	private KieContainer kieContainer;

	public Disease addDisease(Disease disease) {
		return diseaseRepository.save(disease);
	}

	public Disease findOne(Integer id) {
		return diseaseRepository.getOne(id);
	}

	public List<Disease> findAllDiseases() {
		return diseaseRepository.findAll();
	}

	public Page<Disease> findAll(Pageable page) {
		return diseaseRepository.findAll(page);
	}

	public void remove(Integer id) {
		diseaseRepository.deleteById(id);
	}

	public Long getCount() {
		return diseaseRepository.count();
	}

	public Disease findDisease(List<Symptom> symptoms, Patient patient) {
		KieSession kieSession = kieContainer.newKieSession();

		List<Disease> diseases = diseaseRepository.findAll();
		addFactInMemory(kieSession, symptoms, patient, diseases);

		int firedRules = kieSession.fireAllRules();
		System.out.println(firedRules);

		SelectedDisease d = new SelectedDisease();
		d.setName("bolest");

		kieSession.insert(d);

		firedRules = kieSession.fireAllRules();
		System.out.println(firedRules);

		kieSession.dispose();

		for (Disease disease : diseases) {
			System.out.println(disease.getName());
			System.out.println(disease.getNumSymptoms());
		}

		System.out.println(d.getName());

		return diseaseRepository.findByName(d.getName());

	}

	public PatientDisease findPatientDisease(Integer id) {
		return patientDiseaseRepository.getOne(id);
	}

	private void addFactInMemory(KieSession kieSession, List<Symptom> symptoms, Patient patient,
			List<Disease> diseases) {

		for (Symptom symptom : symptoms) {
			kieSession.insert(symptom);
		}

		List<PatientDisease> patientDiseases = patientDiseaseRepository.getPatientDiseases(patient.getId());
		for (PatientDisease patientDisease : patientDiseases) {
			kieSession.insert(patientDisease);
			List<PatientCure> patientCures = patientCureRepository.getPatientCures(patientDisease.getId());

			for (PatientCure patientCure : patientCures) {
				kieSession.insert(patientCure);
			}
		}

		for (Disease disease : diseases) {
			disease.setNumSymptoms(0L);
			disease.setSpecificSymptoms(0L);
			for (DiseaseSymptom diseaseSymptom : disease.getDiseaseSymptoms()) {
				disease.setSymptoms(diseaseSymptom.getSymptom().getName());

			}
			if (!disease.getDiseaseSymptoms().isEmpty()) {
				kieSession.insert(disease);
			}
		}

	}
}
