package drools.spring.example.event;

import java.io.Serializable;
import java.util.Date;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

@Role(Role.Type.EVENT)
@Timestamp("executionTime")
@Expires("1h")
public class OxygenLevelEvent implements Serializable {

	private static final long serialVersionUID = 1L;
	private Date executionTime;
	private Long patientId;
	private Integer oxygenLevel;

	public OxygenLevelEvent() {
		super();
	}

	public OxygenLevelEvent(Long patientId, Integer oxygenLevel) {
		super();
		this.patientId = patientId;
		this.oxygenLevel = oxygenLevel;
		this.executionTime = new Date();
	}

	public Date getExecutionTime() {
		return executionTime;
	}

	public void setExecutionTime(Date executionTime) {
		this.executionTime = executionTime;
	}

	public Long getPatientId() {
		return patientId;
	}

	public void setPatientId(Long patientId) {
		this.patientId = patientId;
	}

	public Integer getOxygenLevel() {
		return oxygenLevel;
	}

	public void setOxygenLevel(Integer oxygenLevel) {
		this.oxygenLevel = oxygenLevel;
	}

}
