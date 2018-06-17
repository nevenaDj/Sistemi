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
public class PatientDisease {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "patient_id", nullable = false)
	private Patient patient;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "disease_id", nullable = false)
	private Disease disease;

	private Date date;

	public PatientDisease() {

	}

	public PatientDisease(Patient patient, Disease disease) {
		super();
		this.patient = patient;
		this.disease = disease;
		this.date = new Date();
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Patient getPatient() {
		return patient;
	}

	public void setPatient(Patient patient) {
		this.patient = patient;
	}

	public Disease getDisease() {
		return disease;
	}

	public void setDisease(Disease disease) {
		this.disease = disease;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public boolean dateBefore(Integer days) {
		Date today = new Date();
		Calendar cal = new GregorianCalendar();
		cal.setTime(today);
		cal.add(Calendar.DAY_OF_MONTH, -days);
		Date todayBefore = cal.getTime();

		if (todayBefore.before(this.date)) {
			return true;
		}

		return false;
	}

	public boolean dateBeforeMonth(Integer month) {
		Date today = new Date();
		Calendar cal = new GregorianCalendar();
		cal.setTime(today);
		cal.add(Calendar.MONTH, -month);
		Date todayBefore = cal.getTime();
		System.out.println(todayBefore);

		if (todayBefore.before(this.date)) {
			return true;
		}

		return false;

	}

	public boolean dateAfterMonth(Integer month) {
		Date today = new Date();
		Calendar cal = new GregorianCalendar();
		cal.setTime(today);
		cal.add(Calendar.MONTH, -month);
		Date todayBefore = cal.getTime();
		System.out.println(todayBefore);

		if (todayBefore.after(this.date)) {
			return true;
		}

		return false;

	}

}
