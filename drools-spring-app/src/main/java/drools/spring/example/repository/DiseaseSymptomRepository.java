package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.DiseaseSymptom;
import drools.spring.example.model.Symptom;

@Repository
public interface DiseaseSymptomRepository extends JpaRepository<DiseaseSymptom, Integer> {
	@Query("SELECT ds FROM DiseaseSymptom ds WHERE ds.symptom.id = ?1")
	public List<DiseaseSymptom> findBySymptomId(Integer id);
	
	@Query("SELECT ds.symptom FROM DiseaseSymptom ds WHERE ds.showSymptom = true")
	public List<Symptom> getSymptomsShow();

}
