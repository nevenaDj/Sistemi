
-- password is 'admin' (bcrypt encoded) 
insert into user (username, password) values ('admin', '$2a$12$ngKnzZiiHRoVIDB/RjJ8hOr5lIdTlzxksOgrPVGjXYk4wSFp.Cql6');
-- password is 'doctor' (bcrypt encoded)
insert into user (username, password, first_name, last_name, expertise) values ('doctor', '$2a$12$puWleO7YQE2yRh6ic1eniuftSLDfBE0NGoAqZEybHJktAy8Ms34Iu', 'dr', 'Docto', 'dr mr');

insert into user_roles (user_id, roles) values (1, 0); -- admin has ROLE_ADMIN
insert into user_roles (user_id, roles) values (2, 1); -- doctor has ROLE_DOCTOR

insert into cure_group (name) value ('analgetik');
insert into cure_group (name) value ('antibiotik');
insert into cure_group (name) value ('ostalo');

insert into symptom (name) values ('curenje iz nosa');
insert into symptom (name) values ('bol u grlu');
insert into symptom (name) values ('glavobolja');
insert into symptom (name) values ('kijanje');
insert into symptom (name) values ('kašalj');

insert into disease (name) values ('prehlada');

insert into disease_symptom (disease_id, symptom_id, specific_disease) values (1, 1, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (1, 2, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (1, 3, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (1, 4, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (1, 5, false);

insert into symptom (name) values ('temperatura veća od 38 ⁰C');
insert into symptom (name) values ('drhtavica');

insert into disease (name) values ('groznica');

insert into disease_symptom (disease_id, symptom_id, specific_disease) values (2, 4, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (2, 2, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (2, 5, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (2, 6, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (2, 1, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (2, 3, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (2, 7, false);


insert into symptom (name) values ('bol koji se širi do ušiju');
insert into symptom (name) values ('temperatura od 40 ⁰C do 41 ⁰C');
insert into symptom (name) values ('gubitak apetita');
insert into symptom (name) values ('umor');
insert into symptom (name) values ('žuti sekret iz nosa');

insert into disease (name) values ('upala krajnika');

insert into disease_symptom (disease_id, symptom_id, specific_disease) values (3, 2, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (3, 8, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (3, 3, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (3, 9, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (3, 7, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (3, 10, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (3, 11, false);
insert into disease_symptom (disease_id, symptom_id, specific_disease) values (3, 12, false);
