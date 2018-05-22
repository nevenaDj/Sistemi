package drools.spring.example.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.UserCredentialsDTO;
import drools.spring.example.service.UserService;

@RestController
@RequestMapping("/api")

public class UserController {

	@Autowired
	private UserService userService;

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
	public String login(@RequestBody UserCredentialsDTO credentials) {
		return userService.signin(credentials.getUsername(), credentials.getPassword());
	}

}
