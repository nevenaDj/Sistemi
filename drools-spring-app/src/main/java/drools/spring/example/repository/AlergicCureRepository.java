package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.AlergicCure;

@Repository
public interface AlergicCureRepository extends JpaRepository<AlergicCure, Integer> {
	@Query("SELECT ac FROM AlergicCure ac WHERE ac.patient.id = ?1")
	public List<AlergicCure> findAlergicCures(Integer id);

}
