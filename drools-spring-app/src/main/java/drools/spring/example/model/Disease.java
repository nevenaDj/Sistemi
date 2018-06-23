package drools.spring.example.model;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

@Entity
public class Disease {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String name;

	@Column
	private String groupe;

	@OneToMany(mappedBy = "disease", fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	private Set<DiseaseSymptom> diseaseSymptoms = new HashSet<>();

	@Transient
	private boolean specfic1;

	@Transient
	private boolean specfic2;

	@Transient
	private Long numSymptoms;

	@Transient
	private Long specificSymptoms;

	@Transient
	private List<String> symptoms = new ArrayList<>();

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

	public Long getNumSymptoms() {
		return numSymptoms;
	}

	public void setNumSymptoms(Long numSymptoms) {
		this.numSymptoms = numSymptoms;
	}

	public List<String> getSymptoms() {
		return symptoms;
	}

	public void setSymptoms(String symptom) {
		this.symptoms.add(symptom);
	}

	public String getGroupe() {
		return groupe;
	}

	public void setGroupe(String groupe) {
		this.groupe = groupe;
	}

	public void setSymptoms(List<String> symptoms) {
		this.symptoms = symptoms;
	}

	public Long getSpecificSymptoms() {
		return specificSymptoms;
	}

	public void setSpecificSymptoms(Long specificSymptoms) {
		this.specificSymptoms = specificSymptoms;
	}

	public boolean isSpecfic1() {
		return specfic1;
	}

	public void setSpecfic1(boolean specfic1) {
		this.specfic1 = specfic1;
	}

	public boolean isSpecfic2() {
		return specfic2;
	}

	public void setSpecfic2(boolean specfic2) {
		this.specfic2 = specfic2;
	}

}
