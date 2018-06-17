package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.CureComponent;

@Repository
public interface CureComponentRepository extends JpaRepository<CureComponent, Integer> {
	@Query("SELECT cc FROM CureComponent cc WHERE cc.cure.id = ?1")
	public List<CureComponent> getCureComponents(Integer id);

}
