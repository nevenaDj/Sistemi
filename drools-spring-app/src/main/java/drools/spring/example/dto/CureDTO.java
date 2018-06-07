package drools.spring.example.dto;

import java.util.HashSet;
import java.util.Set;

public class CureDTO {
	private Integer id;
	private String name;
	private GroupeDTO group;
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

	public GroupeDTO getGroup() {
		return group;
	}

	public void setGroup(GroupeDTO group) {
		this.group = group;
	}

	public Set<ComponentDTO> getComponents() {
		return components;
	}

	public void setComponents(Set<ComponentDTO> components) {
		this.components = components;
	}

}
