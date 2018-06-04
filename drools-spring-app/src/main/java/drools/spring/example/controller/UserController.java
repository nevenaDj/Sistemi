package drools.spring.example.controller;

import javax.servlet.http.HttpServletRequest;

import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import drools.spring.example.dto.UserCredentialsDTO;
import drools.spring.example.dto.UserDataDTO;
import drools.spring.example.dto.UserResponseDTO;
import drools.spring.example.model.User;
import drools.spring.example.service.UserService;

@RestController
@RequestMapping("/api")
public class UserController {

	@Autowired
	private UserService userService;

	@Autowired
	private ModelMapper modelMapper;

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<String> login(@RequestBody UserCredentialsDTO credentials) {
		try {
			String jwt = userService.signin(credentials.getUsername(), credentials.getPassword());
			return new ResponseEntity<>(jwt, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	@GetMapping(value = "/me")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_DOCTOR')")
	public ResponseEntity<UserResponseDTO> whoami(HttpServletRequest req) {
		UserResponseDTO userResponseDTO = modelMapper.map(userService.whoami(req), UserResponseDTO.class);

		if (userResponseDTO != null) {
			return new ResponseEntity<>(userResponseDTO, HttpStatus.OK);
		} else {
			return new ResponseEntity<>(HttpStatus.NOT_FOUND);
		}
	}

	@PostMapping("/user")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Void> addUser(@RequestBody UserResponseDTO user) {
		try {
			userService.signup(modelMapper.map(user, User.class));
			return new ResponseEntity<>(HttpStatus.CREATED);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}

	}

	@PostMapping("/password")
	@PreAuthorize("hasRole('ROLE_ADMIN') or hasRole('ROLE_DOCTOR')")
	public ResponseEntity<Void> changePassword(HttpServletRequest req, @RequestBody UserDataDTO user) {
		try {
			userService.changePassword(user.getCurrentPassword(), user.getNewPassword(), user.getCheckPassword(), req);
			return new ResponseEntity<>(HttpStatus.OK);
		} catch (Exception e) {
			System.out.println(e.getMessage());
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);

		}
	}

}
