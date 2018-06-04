package drools.spring.example.model;

import org.springframework.security.core.GrantedAuthority;

public enum Role implements GrantedAuthority {
	ROLE_ADMIN, ROLE_DOCTOR;

	public String getAuthority() {
		return name();
	}

}
