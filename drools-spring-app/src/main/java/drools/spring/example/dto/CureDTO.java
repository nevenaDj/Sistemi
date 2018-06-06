package drools.spring.example.dto;

import java.util.HashSet;
import java.util.Set;

import drools.spring.example.model.Group;

public class CureDTO {
	private Integer id;
	private String name;
	private Group group;
	private Set<ComponentDTO> components = new HashSet<>();

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}

	public Set<ComponentDTO> getComponents() {
		return components;
	}

	public void setComponents(Set<ComponentDTO> components) {
		this.components = components;
	}

}
