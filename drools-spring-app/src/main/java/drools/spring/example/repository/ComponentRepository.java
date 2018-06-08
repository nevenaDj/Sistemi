package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.Component;

@Repository
public interface ComponentRepository extends JpaRepository<Component, Integer> {

	@Query(value = "SELECT components_id FROM cure_components c WHERE c.components_id = ?1", nativeQuery = true)
	public List<Integer> findByComponentId(Integer id);

}
