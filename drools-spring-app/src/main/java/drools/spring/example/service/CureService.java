package drools.spring.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drools.spring.example.model.Cure;
import drools.spring.example.repository.CureRepository;

@Service
public class CureService {

	@Autowired
	private CureRepository cureRepository;

	public Cure addCure(Cure cure) {
		return cureRepository.save(cure);
	}

}
