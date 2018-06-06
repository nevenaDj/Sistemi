package drools.spring.example.dto;

import java.util.HashSet;
import java.util.Set;

public class DiseaseDTO {

	private Integer id;
	private String name;
	private Set<SymptomDTO> symptoms = new HashSet<>();

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

	public Set<SymptomDTO> getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(Set<SymptomDTO> symptoms) {
		this.symptoms = symptoms;
	}

}
