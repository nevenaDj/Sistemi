package drools.spring.example.controller;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.ComponentDTO;
import drools.spring.example.dto.CureDTO;
import drools.spring.example.model.Component;
import drools.spring.example.model.Cure;
import drools.spring.example.model.Group;
import drools.spring.example.service.CureService;

@RestController
@RequestMapping("/api")
public class CureController {

	@Autowired
	private CureService cureService;

	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/cure")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<CureDTO> addCure(@RequestBody CureDTO cure) {
		cure = modelMapper.map(cureService.addCure(modelMapper.map(cure, Cure.class)), CureDTO.class);
		return new ResponseEntity<>(cure, HttpStatus.CREATED);

	}

	@PutMapping("/cure")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<CureDTO> updateCure(@RequestBody CureDTO cureDTO) {
		Cure cure = cureService.findOne(cureDTO.getId());
		if (cure == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}

		cure.setName(cureDTO.getName());
		cure.setGroup(modelMapper.map(cureDTO.getGroup(), Group.class));

		Set<Component> components = new HashSet<>();
		for (ComponentDTO component : cureDTO.getComponents()) {
			components.add(modelMapper.map(component, Component.class));
		}

		cure.setComponents(components);

		cureDTO = modelMapper.map(cureService.addCure(cure), CureDTO.class);

		return new ResponseEntity<>(cureDTO, HttpStatus.CREATED);

	}

	@GetMapping("/cure/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<CureDTO> getCure(@PathVariable Integer id) {
		Cure cure = cureService.findOne(id);
		if (cure == null) {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
		CureDTO cureDTO = modelMapper.map(cure, CureDTO.class);
		return new ResponseEntity<>(cureDTO, HttpStatus.OK);
	}

	@GetMapping("/cures")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<CureDTO>> getAllCuresPage(Pageable page) {
		Page<Cure> cures = cureService.findAll(page);
		List<CureDTO> cureDTOs = new ArrayList<>();
		for (Cure cure : cures) {
			cureDTOs.add(modelMapper.map(cure, CureDTO.class));
		}

		return new ResponseEntity<>(cureDTOs, HttpStatus.OK);
	}

	@GetMapping("/cures/count")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Long> getCount() {
		Long count = cureService.getCount();
		return new ResponseEntity<>(count, HttpStatus.OK);
	}

	@DeleteMapping("/cure/{id}")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> deleteCure(@PathVariable Integer id) {
		cureService.remove(id);
		return new ResponseEntity<>(HttpStatus.OK);
	}

}
