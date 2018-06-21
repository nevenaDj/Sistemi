package drools.spring.example.dto;

public class AllergyComponentDTO {
	private Long id;
	private ComponentDTO component;

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public ComponentDTO getComponent() {
		return component;
	}

	public void setComponent(ComponentDTO component) {
		this.component = component;
	}

}
