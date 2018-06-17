package drools.spring.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.Disease;

@Repository
public interface DiseaseRepository extends JpaRepository<Disease, Integer> {
	Disease findByName(String name);

}
