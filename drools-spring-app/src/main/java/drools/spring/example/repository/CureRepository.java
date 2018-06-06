package drools.spring.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.Cure;

@Repository
public interface CureRepository extends JpaRepository<Cure, Integer> {

}
