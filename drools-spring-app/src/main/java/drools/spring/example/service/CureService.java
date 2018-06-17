package drools.spring.example.service;

import java.util.HashSet;
import java.util.List;

import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import drools.spring.example.model.AlergicComponent;
import drools.spring.example.model.AlergicCure;
import drools.spring.example.model.Component;
import drools.spring.example.model.Cure;
import drools.spring.example.model.CureComponent;
import drools.spring.example.model.Patient;
import drools.spring.example.model.PatientCure;
import drools.spring.example.model.PatientDisease;
import drools.spring.example.repository.AlergicComponentRepository;
import drools.spring.example.repository.AlergicCureRepository;
import drools.spring.example.repository.CureComponentRepository;
import drools.spring.example.repository.CureRepository;
import drools.spring.example.repository.PatientCureRepository;

@Service
public class CureService {

	@Autowired
	private CureRepository cureRepository;

	@Autowired
	private AlergicComponentRepository alergicComponentRepository;

	@Autowired
	private AlergicCureRepository alergicCureRepository;

	@Autowired
	private CureComponentRepository cureComponentRepository;

	@Autowired
	private PatientCureRepository patientCureRepository;

	@Autowired
	private KieContainer kieContainer;

	public Cure addCure(Cure cure, List<Component> components) {
		cure = cureRepository.save(cure);

		for (Component component : components) {
			CureComponent cureComponent = new CureComponent(cure, component);
			cureComponentRepository.save(cureComponent);
		}
		return cure;
	}

	public Cure findOne(Integer id) {
		return cureRepository.getOne(id);
	}

	public Page<Cure> findAll(Pageable page) {
		return cureRepository.findAll(page);
	}

	public List<Cure> findAll() {
		return cureRepository.findAll();
	}

	public void remove(Integer id) {
		cureRepository.deleteById(id);
	}

	public Long getCount() {
		return cureRepository.count();
	}

	public List<CureComponent> getCureComponents(Integer id) {
		return cureComponentRepository.getCureComponents(id);
	}

	public boolean addPatientCure(List<Cure> cures, Patient patient, PatientDisease patientDisease) {
		KieSession kieSession = kieContainer.newKieSession();

		for (Cure cure : cures) {
			cure.setAlergic(false);
			kieSession.insert(cure);
			cure.setComponents(new HashSet<>());

			List<CureComponent> cureComponents = cureComponentRepository.getCureComponents(cure.getId());

			for (CureComponent cureComponent : cureComponents) {
				cureComponent.setAlergic(false);

				cure.addComponent(cureComponent);
				kieSession.insert(cureComponent);
			}
		}

		List<AlergicComponent> alergicComponents = alergicComponentRepository.findAlergicComponents(patient.getId());

		for (AlergicComponent alergicComponent : alergicComponents) {
			kieSession.insert(alergicComponent);
		}

		List<AlergicCure> alergicCures = alergicCureRepository.findAlergicCures(patient.getId());

		for (AlergicCure alergicCure : alergicCures) {
			kieSession.insert(alergicCure);
		}

		int firedRules = kieSession.fireAllRules();
		System.out.println(firedRules);

		for (Cure cure : cures) {
			System.out.println(cure.isAlergic());

			if (cure.isAlergic()) {
				kieSession.dispose();
				return true;
			}

			for (CureComponent cureComponent : cure.getComponents()) {
				System.out.println(cureComponent.isAlergic());

				if (cureComponent.isAlergic()) {
					kieSession.dispose();
					return true;

				}
			}
		}

		kieSession.dispose();

		for (Cure cure : cures) {
			PatientCure patientCure = new PatientCure(cure, patientDisease);
			patientCureRepository.save(patientCure);

		}

		return false;

	}

}
