package drools.spring.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.Symptom;

@Repository
public interface SymptomRepository extends JpaRepository<Symptom, Integer> {

}
