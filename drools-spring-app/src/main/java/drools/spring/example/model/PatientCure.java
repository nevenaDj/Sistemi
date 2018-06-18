package drools.spring.example.model;

import java.util.Calendar;
import java.util.Date;
import java.util.GregorianCalendar;

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

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "doctor_id", nullable = false)
	private User doctor;

	private Date date;

	public PatientCure() {

	}

	public PatientCure(Cure cure, PatientDisease patientDisease, User doctor) {
		super();
		this.patientDisease = patientDisease;
		this.cure = cure;
		this.doctor = doctor;
		this.date = new Date();
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

	public User getDoctor() {
		return doctor;
	}

	public void setDoctor(User doctor) {
		this.doctor = doctor;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public boolean dateBeforeMonth(Integer month) {
		Date today = new Date();
		Calendar cal = new GregorianCalendar();
		cal.setTime(today);
		cal.add(Calendar.MONTH, -month);
		Date todayBefore = cal.getTime();

		if (todayBefore.before(this.date)) {
			return true;
		}

		return false;

	}

}
