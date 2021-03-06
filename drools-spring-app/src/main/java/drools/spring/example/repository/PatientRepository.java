package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.Patient;

@Repository
public interface PatientRepository extends JpaRepository<Patient, Integer> {

	@Query("SELECT Object(p) FROM Patient p WHERE "
			+ "LOWER(p.firstName) = LOWER(?1) OR LOWER(p.lastName) = LOWER(?1) OR "
			+ "CONCAT(LOWER(p.firstName),' ',LOWER(p.lastName)) LIKE LOWER(CONCAT('%',?1,'%'))")
	public List<Patient> findPatients(String search);

	@Query(value = "SELECT p FROM Patient p WHERE p.doctor.id = ?1 ")
	public Page<Patient> getPatients(Integer doctorId, Pageable page);

	@Query(value = "SELECT p FROM Patient p WHERE p.doctor.id = ?1 ")
	public List<Patient> getPatients(Integer doctorId);

}
