package drools.spring.example.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class DiseaseSymptom {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "disease_id", nullable = false)
	private Disease disease;

	@ManyToOne(fetch = FetchType.EAGER)
	@JoinColumn(name = "symptom_id", nullable = false)
	private Symptom symptom;

	@Column
	private boolean specificDisease;

	public DiseaseSymptom() {

	}

	public DiseaseSymptom(Disease disease, Symptom symptom) {
		super();
		this.disease = disease;
		this.symptom = symptom;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Disease getDisease() {
		return disease;
	}

	public void setDisease(Disease disease) {
		this.disease = disease;
	}

	public Symptom getSymptom() {
		return symptom;
	}

	public void setSymptom(Symptom symptom) {
		this.symptom = symptom;
	}

	public boolean isSpecificDisease() {
		return specificDisease;
	}

	public void setSpecificDisease(boolean specificDisease) {
		this.specificDisease = specificDisease;
	}

}
