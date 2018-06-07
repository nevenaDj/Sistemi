package drools.spring.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import drools.spring.example.exception.CustomException;
import drools.spring.example.model.Cure;
import drools.spring.example.repository.CureRepository;

@Service
public class CureService {

	@Autowired
	private CureRepository cureRepository;

	public Cure addCure(Cure cure) {
		return cureRepository.save(cure);
	}

	public Cure findOne(Integer id) {
		return cureRepository.getOne(id);
	}

	public Page<Cure> findAll(Pageable page) {
		return cureRepository.findAll(page);
	}

	public void remove(Integer id) {
		try {
			cureRepository.deleteById(id);
		} catch (AuthenticationException e) {
			throw new CustomException("The cure can't be removed.", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	public Long getCount() {
		return cureRepository.count();
	}

}
