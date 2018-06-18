package drools.spring.example.dto;

public class PatientDTO {

	private Integer id;

	private String firstName;
	private String lastName;
	private UserResponseDTO doctor;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public String getFirstName() {
		return firstName;
	}

	public void setFirstName(String firstName) {
		this.firstName = firstName;
	}

	public String getLastName() {
		return lastName;
	}

	public void setLastName(String lastName) {
		this.lastName = lastName;
	}

	public UserResponseDTO getDoctor() {
		return doctor;
	}

	public void setDoctor(UserResponseDTO doctor) {
		this.doctor = doctor;
	}

}
