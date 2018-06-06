package drools.spring.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.ComponentDTO;
import drools.spring.example.model.Component;
import drools.spring.example.service.ComponentService;

@RestController
@RequestMapping("/api")
public class ComponentController {

	@Autowired
	private ComponentService componentService;

	@Autowired
	private ModelMapper modelMapper;

	@PostMapping("/component")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<ComponentDTO> addComponent(@RequestBody ComponentDTO componentDTO) {
		componentDTO = modelMapper.map(componentService.addComponent(modelMapper.map(componentDTO, Component.class)),
				ComponentDTO.class);
		return new ResponseEntity<>(componentDTO, HttpStatus.CREATED);

	}

	@GetMapping("/component")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<ComponentDTO>> getAllComponents() {
		List<Component> components = componentService.findAllComponents();
		List<ComponentDTO> componentDTOs = new ArrayList<>();
		for (Component component : components) {
			componentDTOs.add(modelMapper.map(component, ComponentDTO.class));
		}

		return new ResponseEntity<>(componentDTOs, HttpStatus.OK);
	}

}
