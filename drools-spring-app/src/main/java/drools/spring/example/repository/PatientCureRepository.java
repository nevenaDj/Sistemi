package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.PatientCure;

@Repository
public interface PatientCureRepository extends JpaRepository<PatientCure, Integer> {
	@Query("SELECT pc FROM PatientCure pc WHERE pc.patientDisease.id = ?1 ")
	public List<PatientCure> getPatientCures(Integer idPatientDisease);

}
