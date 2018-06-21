package drools.spring.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drools.spring.example.model.AllergyComponent;
import drools.spring.example.model.AllergyCure;
import drools.spring.example.repository.AllergyComponentRepository;
import drools.spring.example.repository.AllergyCureRepository;

@Service
public class AllergyService {
	@Autowired
	private AllergyComponentRepository allergyComponentRepository;

	@Autowired
	private AllergyCureRepository allergyCureRepository;

	public boolean addAllergyCure(AllergyCure allergyCure) {
		if (allergyCureRepository.getAllergyCure(allergyCure.getPatient().getId(),
				allergyCure.getCure().getId()) == null) {
			allergyCureRepository.save(allergyCure);
			return true;
		}
		return false;

	}

	public boolean addAllergyComponent(AllergyComponent allergyComponent) {
		if (allergyComponentRepository.getAllergyComponent(allergyComponent.getPatient().getId(),
				allergyComponent.getComponent().getId()) == null) {
			allergyComponentRepository.save(allergyComponent);
			return true;
		}
		return false;
	}

	public List<AllergyComponent> getAlergicComponentsForPatient(Integer id) {
		return allergyComponentRepository.getAlllergyComponents(id);

	}

	public List<AllergyCure> getAlergicCuresForPatient(Integer id) {
		return allergyCureRepository.getAllergyCures(id);

	}

}
