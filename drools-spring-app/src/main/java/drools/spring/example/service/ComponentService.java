package drools.spring.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drools.spring.example.model.Component;
import drools.spring.example.repository.ComponentRepository;

@Service
public class ComponentService {

	@Autowired
	private ComponentRepository componentRepository;

	public Component addComponent(Component component) {
		return componentRepository.save(component);
	}

	public List<Component> findAllComponents() {
		return componentRepository.findAll();

	}

}
