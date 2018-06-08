package drools.spring.example.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

@Entity
public class Disease {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String name;

	@OneToMany(mappedBy = "disease", fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	private Set<DiseaseSymptom> diseaseSymptoms = new HashSet<>();

	public Disease() {

	}

	public Disease(Integer id, String name) {
		super();
		this.id = id;
		this.name = name;
	}

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

	public Set<DiseaseSymptom> getDiseaseSymptoms() {
		return diseaseSymptoms;
	}

	public void setDiseaseSymptoms(Set<DiseaseSymptom> diseaseSymptoms) {
		this.diseaseSymptoms = diseaseSymptoms;
	}

}
