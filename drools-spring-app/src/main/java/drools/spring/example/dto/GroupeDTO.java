package drools.spring.example.dto;

import java.util.HashSet;
import java.util.Set;

public class GroupeDTO {

	private Integer id;
	private String name;
	private Set<ComponentDTO> cures = new HashSet<>();

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

	public Set<ComponentDTO> getCures() {
		return cures;
	}

	public void setCures(Set<ComponentDTO> cures) {
		this.cures = cures;
	}

}
