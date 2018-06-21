package drools.spring.example.event;

import java.io.Serializable;

import org.kie.api.definition.type.Expires;
import org.kie.api.definition.type.Role;

@Role(Role.Type.EVENT)
@Expires("30m")
public class HeartRhythmEvent implements Serializable {

	private static final long serialVersionUID = 1L;

	public HeartRhythmEvent() {
		super();
	}

}
