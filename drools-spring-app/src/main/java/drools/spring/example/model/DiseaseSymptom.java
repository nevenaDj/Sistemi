package drools.spring.example.model;

import javax.persistence.CascadeType;
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

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "disease_id", nullable = false)
	private Disease disease;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "symptom_id", nullable = false)
	private Symptom symptom;

	@Column
	private boolean specificSymptom;

	@Column
	private boolean showSymptom;

	public DiseaseSymptom() {

	}

	public DiseaseSymptom(Disease disease, Symptom symptom, boolean specificSymptom) {
		super();
		this.disease = disease;
		this.symptom = symptom;
		this.specificSymptom = specificSymptom;
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

	public boolean isSpecificSymptom() {
		return specificSymptom;
	}

	public void setSpecificSymptom(boolean specificSymptom) {
		this.specificSymptom = specificSymptom;
	}

	public boolean isShowSymptom() {
		return showSymptom;
	}

	public void setShowSymptom(boolean showSymptom) {
		this.showSymptom = showSymptom;
	}

}
