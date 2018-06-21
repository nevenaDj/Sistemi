package drools.spring.example.service;

import java.util.ArrayList;
import java.util.List;

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

import drools.spring.example.model.DiseaseSymptom;
import drools.spring.example.model.Symptom;
import drools.spring.example.repository.DiseaseSymptomRepository;
import drools.spring.example.repository.SymptomRepository;

@Service
public class SymptonService {

	@Autowired
	private SymptomRepository symptomRepository;

	@Autowired
	private DiseaseSymptomRepository diseaseSymptomRepository;

	@Autowired
	private KieContainer kieContainer;

	public Symptom addSymptom(Symptom symptom) {
		return symptomRepository.save(symptom);
	}

	public Symptom findOne(Integer id) {
		return symptomRepository.getOne(id);
	}

	public List<Symptom> findAllSymptoms() {
		return symptomRepository.findAll();
	}

	public Page<Symptom> findAll(Pageable page) {
		return symptomRepository.findAll(page);
	}

	public boolean remove(Integer id) {
		if (diseaseSymptomRepository.findBySymptomId(id).isEmpty()) {
			symptomRepository.deleteById(id);
			return true;
		} else {
			return false;
		}

	}

	public Long getCount() {
		return symptomRepository.count();
	}

	public List<Symptom> getSymptoms(Integer id) {
		return symptomRepository.getSymptoms(id);
	}

	public List<DiseaseSymptom> getDiseaseSymptoms(Integer id) {
		return symptomRepository.getDiseaseSymptoms(id);
	}

	public List<Symptom> getSymptomsShow() {
		return diseaseSymptomRepository.getSymptomsShow();
	}

	public DiseaseSymptom addDiseaseSymptom(DiseaseSymptom diseaseSymptom) {
		return diseaseSymptomRepository.save(diseaseSymptom);
	}

	public List<DiseaseSymptom> findBySymptomId(Integer id) {
		return diseaseSymptomRepository.findBySymptomId(id);
	}

	public List<DiseaseSymptom> findSymotoms(String diseaseName) {
		KieServices ks = KieServices.Factory.get();
		KieBaseConfiguration kbconf = ks.newKieBaseConfiguration();
		kbconf.setOption(EventProcessingOption.STREAM);
		KieBase kbase = kieContainer.newKieBase(kbconf);

		KieSession kieSession = kbase.newKieSession();
		List<DiseaseSymptom> diseaseSymptoms = diseaseSymptomRepository.findAll();

		for (DiseaseSymptom diseaseSymptom : diseaseSymptoms) {
			kieSession.insert(diseaseSymptom);
		}

		QueryResults results = kieSession.getQueryResults("Pretraga simptoma", diseaseName);
		System.out.println(results.size());

		List<DiseaseSymptom> diseaseSymptomsRes = new ArrayList<>();
		for (QueryResultsRow row : results) {
			DiseaseSymptom diseaseSymptom = (DiseaseSymptom) row.get("$diseaseSymptom");

			System.out.println(diseaseSymptom.getDisease().getName());

			diseaseSymptomsRes.add(diseaseSymptom);

		}
		return diseaseSymptomsRes;
	}

}
