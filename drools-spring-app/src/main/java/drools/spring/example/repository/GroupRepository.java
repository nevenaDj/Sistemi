package drools.spring.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.Group;

@Repository
public interface GroupRepository extends JpaRepository<Group, Integer> {

}
