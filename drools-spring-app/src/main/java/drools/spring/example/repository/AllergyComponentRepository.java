package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.AllergyComponent;

@Repository
public interface AllergyComponentRepository extends JpaRepository<AllergyComponent, Integer> {
	@Query("SELECT ac FROM AllergyComponent ac WHERE ac.patient.id = ?1")
	public List<AllergyComponent> getAlllergyComponents(Integer id);

	
	@Query("SELECT ac FROM AllergyComponent ac WHERE ac.patient.id = ?1 AND ac.component.id = ?2 ")
	public AllergyComponent getAllergyComponent(Integer idPartient, Integer idComponent);
}
