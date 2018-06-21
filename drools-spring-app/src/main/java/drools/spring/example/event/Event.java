package drools.spring.example.event;

import java.io.Serializable;
import java.util.Date;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

@Role(Role.Type.EVENT)
@Timestamp("executionTime")
@Expires("1h")
public class Event implements Serializable {

	private static final long serialVersionUID = 1L;
	private Date executionTime;
	private Integer quantity;
	private Integer patientId;

	public Event() {
		super();
	}

	public Event(Integer quantity, Integer patientId) {
		super();
		this.quantity = quantity;
		this.patientId = patientId;
		this.executionTime = new Date();
	}

	public Date getExecutionTime() {
		return executionTime;
	}

	public void setExecutionTime(Date executionTime) {
		this.executionTime = executionTime;
	}

	public Integer getQuantity() {
		return quantity;
	}

	public void setQuantity(Integer quantity) {
		this.quantity = quantity;
	}

	public Integer getPatientId() {
		return patientId;
	}

	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}

}
