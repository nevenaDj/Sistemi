package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.AlergicComponent;

@Repository
public interface AlergicComponentRepository extends JpaRepository<AlergicComponent, Integer> {
	@Query("SELECT ac FROM AlergicComponent ac WHERE ac.patient.id = ?1")
	public List<AlergicComponent> findAlergicComponents(Integer id);

}
