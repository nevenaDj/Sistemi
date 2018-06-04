package drools.spring.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {

}
