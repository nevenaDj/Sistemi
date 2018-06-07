package drools.spring.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.DiseaseSymptom;

@Repository
public interface DiseaseSymptomRepository extends JpaRepository<DiseaseSymptom, Integer> {

}
