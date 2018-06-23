package drools.spring.example.service;

import java.util.ArrayList;
import java.util.Calendar;
import java.util.Collections;
import java.util.Comparator;
import java.util.Date;
import java.util.GregorianCalendar;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

import org.kie.api.KieBase;
import org.kie.api.KieBaseConfiguration;
import org.kie.api.KieServices;
import org.kie.api.conf.EventProcessingOption;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.kie.api.runtime.rule.QueryResults;
import org.kie.api.runtime.rule.QueryResultsRow;
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
import drools.spring.example.repository.DiseaseSymptomRepository;
import drools.spring.example.repository.PatientCureRepository;
import drools.spring.example.repository.PatientDiseaseRepsoitory;

@Service
public class DiseaseService {

	@Autowired
	private DiseaseRepository diseaseRepository;

	@Autowired
	private DiseaseSymptomRepository diseaseSymptomRepository;

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
		Date today = new Date();
		Calendar cal = new GregorianCalendar();
		cal.setTime(today);
		cal.add(Calendar.DAY_OF_MONTH, -60);
		Date before60days = cal.getTime();

		cal.setTime(today);
		cal.add(Calendar.DAY_OF_MONTH, -14);
		Date before14days = cal.getTime();

		cal.setTime(today);
		cal.add(Calendar.DAY_OF_MONTH, -21);
		Date before21days = cal.getTime();

		cal.setTime(today);
		cal.add(Calendar.MONTH, -6);
		Date before6month = cal.getTime();

		KieServices ks = KieServices.Factory.get();
		KieBaseConfiguration kbconf = ks.newKieBaseConfiguration();
		kbconf.setOption(EventProcessingOption.STREAM);
		KieBase kbase = kieContainer.newKieBase(kbconf);

		KieSession kieSession = kbase.newKieSession();

		kieSession.setGlobal("before60days", before60days);
		kieSession.setGlobal("before14days", before14days);
		kieSession.setGlobal("before21days", before21days);
		kieSession.setGlobal("before6month", before6month);

		List<Disease> diseases = diseaseRepository.findAll();
		addFactInMemory(kieSession, symptoms, patient, diseases);

		kieSession.getAgenda().getAgendaGroup("bolesti").setFocus();
		int firedRules = kieSession.fireAllRules();
		System.out.println(firedRules);

		SelectedDisease d = new SelectedDisease();
		d.setName("bolest");

		kieSession.insert(d);

		kieSession.getAgenda().getAgendaGroup("pretraga bolesti").setFocus();
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

	public List<Disease> findDiseases(List<Symptom> symptoms) {
		KieServices ks = KieServices.Factory.get();
		KieBaseConfiguration kbconf = ks.newKieBaseConfiguration();
		kbconf.setOption(EventProcessingOption.STREAM);
		KieBase kbase = kieContainer.newKieBase(kbconf);

		KieSession kieSession = kbase.newKieSession();
		addFactInMemoryFind(kieSession, symptoms);

		QueryResults results = kieSession.getQueryResults("Pretraga bolesti");
		System.out.println(results.size());

		Map<Integer, Integer> diseasesSort = new HashMap<>();
		Map<Integer, Disease> diseases = new HashMap<>();
		for (QueryResultsRow row : results) {
			Set<Disease> diseasesSet = (Set<Disease>) row.get("$diseases");

			for (Disease disease : diseasesSet) {
				System.out.println(disease.getName());
				if (diseasesSort.containsKey(disease.getId())) {
					Integer count = diseasesSort.get(disease.getId());
					diseasesSort.put(disease.getId(), count + 1);
				} else {
					diseasesSort.put(disease.getId(), 1);
					diseases.put(disease.getId(), disease);
				}
			}

		}

		List<Disease> diseasesResult = new ArrayList<>();
		for (Entry<Integer, Integer> e : entriesSortedByValues(diseasesSort)) {
			System.out.println(e.getKey());
			diseasesResult.add(diseases.get(e.getKey()));
		}
		return diseasesResult;

	}

	public PatientDisease findPatientDisease(Integer id) {
		return patientDiseaseRepository.getOne(id);
	}

	public List<PatientDisease> getPatientDiseases(Integer id) {
		return patientDiseaseRepository.getPatientDiseases(id);
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

	private void addFactInMemoryFind(KieSession kieSession, List<Symptom> symptoms) {
		for (Symptom symptom : symptoms) {
			kieSession.insert(symptom);
		}

		List<DiseaseSymptom> diseaseSymptoms = diseaseSymptomRepository.findAll();

		for (DiseaseSymptom diseaseSymptom : diseaseSymptoms) {
			kieSession.insert(diseaseSymptom);
		}

	}

	static <K, V extends Comparable<? super V>> List<Entry<K, V>> entriesSortedByValues(Map<K, V> map) {

		List<Entry<K, V>> sortedEntries = new ArrayList<Entry<K, V>>(map.entrySet());

		Collections.sort(sortedEntries, new Comparator<Entry<K, V>>() {
			@Override
			public int compare(Entry<K, V> e1, Entry<K, V> e2) {
				return e2.getValue().compareTo(e1.getValue());
			}
		});

		return sortedEntries;
	}
}
