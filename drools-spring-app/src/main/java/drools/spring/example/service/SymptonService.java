package drools.spring.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drools.spring.example.model.Symptom;
import drools.spring.example.repository.SymptomRepository;

@Service
public class SymptonService {

	@Autowired
	private SymptomRepository symptomRepository;

	public Symptom addSymptom(Symptom symptom) {
		return symptomRepository.save(symptom);
	}

	public List<Symptom> findAllSymptoms() {
		return symptomRepository.findAll();
	}

}
