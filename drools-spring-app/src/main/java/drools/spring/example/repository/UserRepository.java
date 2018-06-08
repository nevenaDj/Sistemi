package drools.spring.example.repository;

import java.util.List;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import drools.spring.example.model.User;

@Repository
public interface UserRepository extends JpaRepository<User, Integer> {

	boolean existsByUsername(String username);

	User findByUsername(String username);

	@Query(value = "SELECT * FROM user u, user_roles ur WHERE ur.roles = ?1 AND u.id = ur.user_id", nativeQuery = true)
	public Page<User> find(Integer role, Pageable page);

	@Query(value = "SELECT * FROM user u, user_roles ur WHERE ur.roles = ?1 AND u.id = ur.user_id", nativeQuery = true)
	public List<User> findAll(Integer role);

}
