package drools.spring.example.controller;

import java.util.ArrayList;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpSession;

import org.kie.api.KieBase;
import org.kie.api.KieBaseConfiguration;
import org.kie.api.KieServices;
import org.kie.api.conf.EventProcessingOption;
import org.kie.api.runtime.KieContainer;
import org.kie.api.runtime.KieSession;
import org.modelmapper.ModelMapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
	HttpSession session;

	@Autowired
	private KieContainer kieContainer;

	@Autowired
	private ModelMapper modelMapper;

	@RequestMapping(value = "/login", method = RequestMethod.POST, consumes = "application/json")
	public ResponseEntity<String> login(@RequestBody UserCredentialsDTO credentials) {
		try {
			String jwt = userService.signin(credentials.getUsername(), credentials.getPassword());
			setSession(credentials.getUsername());
			return new ResponseEntity<>(jwt, HttpStatus.OK);
		} catch (Exception e) {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
	}

	private void setSession(String username) {
		KieServices ks = KieServices.Factory.get();
		KieBaseConfiguration kbconf = ks.newKieBaseConfiguration();
		kbconf.setOption(EventProcessingOption.STREAM);
		KieBase kbase = kieContainer.newKieBase(kbconf);

		KieSession kieSession = kbase.newKieSession();

		session.setAttribute(username, kieSession);

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
	public ResponseEntity<UserResponseDTO> addUser(@RequestBody UserResponseDTO user) {
		try {
			user = modelMapper.map(userService.signup(modelMapper.map(user, User.class)), UserResponseDTO.class);
			return new ResponseEntity<>(user, HttpStatus.CREATED);
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

	@GetMapping("/doctors")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<List<UserResponseDTO>> getAllDoctorsPage(Pageable page) {
		Page<User> doctors = userService.findAll(1, page);
		List<UserResponseDTO> doctorDTOs = new ArrayList<>();
		for (User doctor : doctors) {
			doctorDTOs.add(modelMapper.map(doctor, UserResponseDTO.class));
		}

		return new ResponseEntity<>(doctorDTOs, HttpStatus.OK);
	}

	@GetMapping("/doctors/count")
	@PreAuthorize("hasRole('ROLE_ADMIN')")
	public ResponseEntity<Integer> getCount() {
		Integer count = userService.getCount(1);
		return new ResponseEntity<>(count, HttpStatus.OK);
	}

}
