package drools.spring.example.model;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Transient;

@Entity
public class CureComponent {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Long id;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "cure_id", nullable = false)
	private Cure cure;

	@ManyToOne(fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	@JoinColumn(name = "component_id", nullable = false)
	private Component component;

	@Transient
	private boolean alergic;

	public CureComponent() {

	}

	public CureComponent(Cure cure, Component component) {
		super();
		this.cure = cure;
		this.component = component;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public Cure getCure() {
		return cure;
	}

	public void setCure(Cure cure) {
		this.cure = cure;
	}

	public Component getComponent() {
		return component;
	}

	public void setComponent(Component component) {
		this.component = component;
	}

	public boolean isAlergic() {
		return alergic;
	}

	public void setAlergic(boolean alergic) {
		this.alergic = alergic;
	}

}
