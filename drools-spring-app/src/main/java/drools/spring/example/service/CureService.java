package drools.spring.example.service;

import java.util.HashSet;
import java.util.List;

import org.kie.api.KieBase;
import org.kie.api.KieBaseConfiguration;
import org.kie.api.KieServices;
import org.kie.api.conf.EventProcessingOption;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;

import drools.spring.example.model.AllergyComponent;
import drools.spring.example.model.AllergyCure;
import drools.spring.example.model.Component;
import drools.spring.example.model.Cure;
import drools.spring.example.model.CureComponent;
import drools.spring.example.model.Patient;
import drools.spring.example.model.PatientCure;
import drools.spring.example.model.PatientDisease;
import drools.spring.example.model.User;
import drools.spring.example.repository.AllergyComponentRepository;
import drools.spring.example.repository.AllergyCureRepository;
import drools.spring.example.repository.CureComponentRepository;
import drools.spring.example.repository.CureRepository;
import drools.spring.example.repository.PatientCureRepository;

@Service
public class CureService {

	@Autowired
	private CureRepository cureRepository;

	@Autowired
	private AllergyComponentRepository alergicComponentRepository;

	@Autowired
	private AllergyCureRepository alergicCureRepository;

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

	public List<PatientCure> getPatientCures(Integer id) {
		return patientCureRepository.getPatientCures(id);
	}

	public boolean addPatientCure(List<Cure> cures, Patient patient, PatientDisease patientDisease, User doctor) {
		KieServices ks = KieServices.Factory.get();
		KieBaseConfiguration kbconf = ks.newKieBaseConfiguration();
		kbconf.setOption(EventProcessingOption.STREAM);
		KieBase kbase = kieContainer.newKieBase(kbconf);

		KieSession kieSession = kbase.newKieSession();

		addFactInMemory(kieSession, cures, patient);

		kieSession.getAgenda().getAgendaGroup("lekovi").setFocus();
		int firedRules = kieSession.fireAllRules();
		System.out.println(firedRules);

		kieSession.dispose();

		for (Cure cure : cures) {
			if (cure.isAlergic()) {
				return true;
			}

			for (CureComponent cureComponent : cure.getComponents()) {

				if (cureComponent.isAlergic()) {
					return true;
				}
			}
		}

		for (Cure cure : cures) {
			PatientCure patientCure = new PatientCure(cure, patientDisease, doctor);
			patientCureRepository.save(patientCure);
		}

		return false;

	}

	private void addFactInMemory(KieSession kieSession, List<Cure> cures, Patient patient) {
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

		List<AllergyComponent> alergicComponents = alergicComponentRepository.getAlllergyComponents(patient.getId());

		for (AllergyComponent alergicComponent : alergicComponents) {
			kieSession.insert(alergicComponent);
		}

		List<AllergyCure> alergicCures = alergicCureRepository.getAllergyCures(patient.getId());

		for (AllergyCure alergicCure : alergicCures) {
			kieSession.insert(alergicCure);
		}

	}

}
