package drools.spring.example.controller;

import java.util.ArrayList;
import java.util.List;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.GroupeDTO;
import drools.spring.example.model.Group;
import drools.spring.example.service.GroupService;

@RestController
@RequestMapping("/api")
public class GroupController {
	@Autowired
	private GroupService groupService;

	@Autowired
	private ModelMapper modelMapper;

	@GetMapping("/groupe")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<GroupeDTO>> getAllGropue() {
		List<Group> groups = groupService.findAllGroupe();
		List<GroupeDTO> groupeDTOs = new ArrayList<>();
		for (Group group : groups) {
			groupeDTOs.add(modelMapper.map(group, GroupeDTO.class));
		}

		return new ResponseEntity<>(groupeDTOs, HttpStatus.OK);

	}

}
