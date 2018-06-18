package drools.spring.example.service;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.QueryResults;
import org.kie.api.runtime.rule.QueryResultsRow;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drools.spring.example.model.Disease;
import drools.spring.example.model.Patient;
import drools.spring.example.model.PatientCure;
import drools.spring.example.model.PatientDisease;
import drools.spring.example.model.User;
import drools.spring.example.repository.DiseaseRepository;
import drools.spring.example.repository.PatientCureRepository;
import drools.spring.example.repository.PatientDiseaseRepsoitory;
import drools.spring.example.repository.PatientRepository;

@Service
public class ReportService {

	@Autowired
	private PatientRepository patientRepository;

	@Autowired
	private PatientDiseaseRepsoitory patientDiseaseRepository;

	@Autowired
	private PatientCureRepository patientCureRepository;

	@Autowired
	private DiseaseRepository diseaseRepository;

	@Autowired
	private KieContainer kieContainer;

	public List<Patient> getReport1() {
		KieSession kieSession = kieContainer.newKieSession();

		addFactInMemory1(kieSession);

		QueryResults results = kieSession.getQueryResults("Spisak pacijenata sa mogucim hronicnim oboljenjima");
		System.out.println(results.size());

		List<Patient> patientDiseasesResult = new ArrayList<>();
		for (QueryResultsRow row : results) {
			Patient patient = (Patient) row.get("patient");
			Disease disease = (Disease) row.get("disease");
			System.out.println(patient.getFirstName());
			System.out.println(disease.getName());
			patientDiseasesResult.add(patient);
		}

		kieSession.dispose();

		return patientDiseasesResult;
	}

	public List<Patient> getReport2() {
		KieSession kieSession = kieContainer.newKieSession();

		addFactInMemory(kieSession);

		QueryResults results = kieSession.getQueryResults("Spisak mogucih zavisnika");
		System.out.println(results.size());

		List<Patient> patientsResult = new ArrayList<>();

		for (QueryResultsRow row : results) {
			Patient patient = (Patient) row.get("$patient");
			List<PatientCure> patientCures = (List<PatientCure>) row.get("$patientCure");
			Set<User> users = (Set<User>) row.get("$doctors");

			System.out.println(patient.getFirstName());

			for (PatientCure patientCure : patientCures) {
				System.out.println(patientCure.getCure().getName());
			}

			for (User user : users) {
				System.out.println(user.getUsername());

			}

			patientsResult.add(patient);
		}

		kieSession.dispose();

		return patientsResult;
	}

	public List<Patient> getReport3() {
		KieSession kieSession = kieContainer.newKieSession();

		addFactInMemory(kieSession);

		QueryResults results = kieSession.getQueryResults("Spisak pacijenta sa oslabljenim imunitetom");
		System.out.println(results.size());

		List<Patient> patientsResult = new ArrayList<>();

		for (QueryResultsRow row : results) {
			Patient patient = (Patient) row.get("$patient");
			List<PatientCure> patientCures = (List<PatientCure>) row.get("$patientCure");
			Set<Disease> patientDiseases = (Set<Disease>) row.get("$patientDisease");

			System.out.println(patient.getFirstName());

			for (PatientCure patientCure : patientCures) {
				System.out.println(patientCure.getCure().getName());
			}

			for (Disease patientDisease : patientDiseases) {
				System.out.println(patientDisease.getName());

			}

			patientsResult.add(patient);
		}

		kieSession.dispose();

		return patientsResult;
	}

	private void addFactInMemory(KieSession kieSession) {
		List<Patient> patients = patientRepository.findAll();

		for (Patient patient : patients) {
			kieSession.insert(patient);
		}

		List<PatientCure> patientCures = patientCureRepository.findAll();

		for (PatientCure patientCure : patientCures) {
			kieSession.insert(patientCure);
		}
	}

	private void addFactInMemory1(KieSession kieSession) {
		List<Patient> patients = patientRepository.findAll();

		for (Patient patient : patients) {
			kieSession.insert(patient);
		}

		List<PatientDisease> patientDiseases = patientDiseaseRepository.findAll();

		for (PatientDisease patientDisease : patientDiseases) {
			kieSession.insert(patientDisease);
		}

		List<Disease> diseases = diseaseRepository.findAll();

		for (Disease disease : diseases) {
			kieSession.insert(disease);
		}
	}

}