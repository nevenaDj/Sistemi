package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.AllergyCure;

@Repository
public interface AllergyCureRepository extends JpaRepository<AllergyCure, Integer> {
	@Query("SELECT ac FROM AllergyCure ac WHERE ac.patient.id = ?1")
	public List<AllergyCure> getAllergyCures(Integer id);

	@Query("SELECT ac FROM AllergyCure ac WHERE ac.patient.id = ?1 AND ac.cure.id = ?2 ")
	public AllergyCure getAllergyCure(Integer idPartient, Integer idCure);

}
