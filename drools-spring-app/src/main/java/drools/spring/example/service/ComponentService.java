package drools.spring.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import drools.spring.example.exception.CustomException;
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

	public Page<Component> findAll(Pageable page) {
		return componentRepository.findAll(page);
	}

	public Component findOne(Integer id) {
		return componentRepository.getOne(id);
	}

	public void remove(Integer id) {
		try {
			componentRepository.deleteById(id);
		} catch (AuthenticationException e) {
			throw new CustomException("The component can't be removed.", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	public Long getCount() {
		return componentRepository.count();
	}

}
