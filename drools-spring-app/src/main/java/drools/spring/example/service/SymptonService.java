package drools.spring.example.service;

import java.util.List;

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

	public DiseaseSymptom addDiseaseSymptom(DiseaseSymptom diseaseSymptom) {
		return diseaseSymptomRepository.save(diseaseSymptom);

	}

}
