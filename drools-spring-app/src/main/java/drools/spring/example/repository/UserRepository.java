package drools.spring.example.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	boolean existsByUsername(String username);

	User findByUsername(String username);

}
