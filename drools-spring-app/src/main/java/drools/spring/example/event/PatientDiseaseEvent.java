package drools.spring.example.event;

import java.io.Serializable;
import java.util.Date;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;
import org.kie.api.definition.type.Timestamp;

@Role(Role.Type.EVENT)
@Timestamp("executionTime")
@Expires("1h")
public class PatientDiseaseEvent implements Serializable {

	private static final long serialVersionUID = 1L;
	private Date executionTime;
	private String disease;
	
	public PatientDiseaseEvent(){
		super();
	}

	public PatientDiseaseEvent(Date executionTime, String disease) {
		super();
		this.executionTime = executionTime;
		this.disease = disease;
	}

	public Date getExecutionTime() {
		return executionTime;
	}

	public void setExecutionTime(Date executionTime) {
		this.executionTime = executionTime;
	}

	public String getDisease() {
		return disease;
	}

	public void setDisease(String disease) {
		this.disease = disease;
	}

}
