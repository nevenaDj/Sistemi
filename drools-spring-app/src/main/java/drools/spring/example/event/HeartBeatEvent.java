package drools.spring.example.event;

import java.io.Serializable;
import java.util.Date;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

@Role(Role.Type.EVENT)
@Timestamp("executionTime")
@Expires("1m")
public class HeartBeatEvent implements Serializable {

	private static final long serialVersionUID = 1L;
	private Date executionTime;
	private Integer patientId;

	public HeartBeatEvent() {
		super();
	}

	public HeartBeatEvent(Integer patientId) {
		super();
		this.executionTime = new Date();
		this.patientId = patientId;
	}

	public Date getExecutionTime() {
		return executionTime;
	}

	public void setExecutionTime(Date executionTime) {
		this.executionTime = executionTime;
	}

	public Integer getPatientId() {
		return patientId;
	}

	public void setPatientId(Integer patientId) {
		this.patientId = patientId;
	}

}
