package drools.spring.example.dto;

public class AllergyCureDTO {
	private Long id;
	private CureDTO cure;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public CureDTO getCure() {
		return cure;
	}

	public void setCure(CureDTO cure) {
		this.cure = cure;
	}

}
