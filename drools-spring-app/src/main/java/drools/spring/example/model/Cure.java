package drools.spring.example.model;

import java.util.HashSet;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.Transient;

@Entity
public class Cure {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;

	@Column
	private String name;

	@ManyToOne(fetch = FetchType.EAGER)
	private Group group;

	@OneToMany(mappedBy = "cure", fetch = FetchType.EAGER, cascade = CascadeType.REFRESH)
	private Set<CureComponent> components = new HashSet<>();

	@Transient
	private boolean alergic;

	public Integer getId() {
		return id;
	}

	public void setId(Integer id) {
		this.id = id;
	}

	public Group getGroup() {
		return group;
	}

	public void setGroup(Group group) {
		this.group = group;
	}

	public Set<CureComponent> getComponents() {
		return components;
	}

	public void setComponents(Set<CureComponent> components) {
		this.components = components;
	}

	public void addComponent(CureComponent component) {
		this.components.add(component);
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public boolean isAlergic() {
		return alergic;
	}

	public void setAlergic(boolean alergic) {
		this.alergic = alergic;
	}

}
