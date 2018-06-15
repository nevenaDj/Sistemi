package drools.spring.example.dto;

public class SymptomDTO {

	private Integer id;
	private String name;
	private boolean specificSymptom;

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

	public boolean isSpecificSymptom() {
		return specificSymptom;
	}

	public void setSpecificSymptom(boolean specificSymptom) {
		this.specificSymptom = specificSymptom;
	}

}
