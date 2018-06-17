package drools.spring.example.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

@Entity
public class PatientCure {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "patient_disease_id", nullable = false)
	private PatientDisease patientDisease;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "cure_id", nullable = false)
	private Cure cure;

	public PatientCure() {

	}

	public PatientCure(Cure cure, PatientDisease patientDisease) {
		super();
		this.patientDisease = patientDisease;
		this.cure = cure;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public PatientDisease getPatientDisease() {
		return patientDisease;
	}

	public void setPatientDisease(PatientDisease patientDisease) {
		this.patientDisease = patientDisease;
	}

	public Cure getCure() {
		return cure;
	}

	public void setCure(Cure cure) {
		this.cure = cure;
	}

}
