package drools.spring.example.service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import drools.spring.example.model.Group;
import drools.spring.example.repository.GroupRepository;

@Service
public class GroupService {

	@Autowired
	private GroupRepository groupRepository;

	public Group addGroup(Group group) {
		return groupRepository.save(group);
	}

	public List<Group> findAllGroupe() {
		return groupRepository.findAll();
	}

}
