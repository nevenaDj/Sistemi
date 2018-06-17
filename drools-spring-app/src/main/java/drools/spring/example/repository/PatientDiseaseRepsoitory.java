package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.PatientDisease;

@Repository
public interface PatientDiseaseRepsoitory extends JpaRepository<PatientDisease, Integer> {
	@Query("SELECT pd FROM PatientDisease pd WHERE pd.patient.id = ?1 ")
	public List<PatientDisease> getPatientDiseases(Integer idPatient);

}
