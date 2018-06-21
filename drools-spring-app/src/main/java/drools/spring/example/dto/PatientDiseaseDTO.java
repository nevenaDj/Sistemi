package drools.spring.example.dto;

import java.util.Date;
import java.util.List;

public class PatientDiseaseDTO {
	private Integer id;
	private DiseaseDTO disease;
	private UserResponseDTO doctor;
	private Date date;
	private List<CureDTO> cures;

	public PatientDiseaseDTO(Integer id, DiseaseDTO disease, UserResponseDTO doctor, Date date, List<CureDTO> cures) {
		super();
		this.id = id;
		this.cures = cures;
		this.disease = disease;
		this.doctor = doctor;
		this.date = date;
	}

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public DiseaseDTO getDisease() {
		return disease;
	}

	public void setDisease(DiseaseDTO disease) {
		this.disease = disease;
	}

	public UserResponseDTO getDoctor() {
		return doctor;
	}

	public void setDoctor(UserResponseDTO doctor) {
		this.doctor = doctor;
	}

	public Date getDate() {
		return date;
	}

	public void setDate(Date date) {
		this.date = date;
	}

	public List<CureDTO> getCures() {
		return cures;
	}

	public void setCures(List<CureDTO> cures) {
		this.cures = cures;
	}

}
