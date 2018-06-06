package drools.spring.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.Component;

@Repository
public interface ComponentRepository extends JpaRepository<Component, Integer> {

}
