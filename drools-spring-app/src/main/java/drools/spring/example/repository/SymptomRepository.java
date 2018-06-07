package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.Symptom;

@Repository
public interface SymptomRepository extends JpaRepository<Symptom, Integer> {

	@Query("SELECT s FROM Symptom s, DiseaseSymptom ds WHERE s.id = ds.symptom.id AND ds.disease.id = ?1")
	public List<Symptom> getSymptoms(Integer id);

}
