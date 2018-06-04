
-- password is 'admin' (bcrypt encoded) 
insert into user (username, password) values ('admin', '$2a$12$ngKnzZiiHRoVIDB/RjJ8hOr5lIdTlzxksOgrPVGjXYk4wSFp.Cql6');
-- password is 'doctor' (bcrypt encoded)
insert into user (username, password, first_name, last_name, expertise) values ('doctor', '$2a$12$puWleO7YQE2yRh6ic1eniuftSLDfBE0NGoAqZEybHJktAy8Ms34Iu', 'dr', 'Docto', 'dr mr');

insert into user_roles (user_id, roles) values (1, 0); -- admin has ROLE_ADMIN
insert into user_roles (user_id, roles) values (2, 1); -- doctor has ROLE_DOCTOR



