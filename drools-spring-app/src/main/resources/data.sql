
-- password is 'admin' (bcrypt encoded) 
insert into user (username, password, email) values ('admin', '$2a$12$xs5nSgIGrilqql12zylWEe8mCSf8EyTcUCze3GaiXTodIRjlS1ITy', 'admin@email.com');
-- password is 'user' (bcrypt encoded)
insert into user (username, password, email) values ('user', '$2a$12$Ts/7ZUMkJD2hYXAT05ECDeQ.6rzzOSXb32OdQdpt4mcSFTmdSEa8O', 'user@user.com');

insert into user_roles (user_id, roles) values (1, 0); -- admin has ROLE_ADMIN
insert into user_roles (user_id, roles) values (2, 1); -- user has ROLE_USER



