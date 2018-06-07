package drools.spring.example.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.security.core.AuthenticationException;
import org.springframework.stereotype.Service;

import drools.spring.example.exception.CustomException;
import drools.spring.example.model.Disease;
import drools.spring.example.repository.DiseaseRepository;

@Service
public class DiseaseService {

	@Autowired
	private DiseaseRepository diseaseRepository;

	public Disease addDisease(Disease disease) {
		return diseaseRepository.save(disease);
	}

	public Disease findOne(Integer id) {
		return diseaseRepository.getOne(id);
	}

	public Page<Disease> findAll(Pageable page) {
		return diseaseRepository.findAll(page);
	}

	public void remove(Integer id) {
		try {
			diseaseRepository.deleteById(id);
		} catch (AuthenticationException e) {
			throw new CustomException("The disease can't be removed.", HttpStatus.UNPROCESSABLE_ENTITY);
		}
	}

	public Long getCount() {
		return diseaseRepository.count();
	}

}
