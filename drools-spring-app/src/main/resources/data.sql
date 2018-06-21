
-- password is 'admin' (bcrypt encoded) 
insert into user (username, password) values ('admin', '$2a$12$ngKnzZiiHRoVIDB/RjJ8hOr5lIdTlzxksOgrPVGjXYk4wSFp.Cql6');
-- password is 'doctor' (bcrypt encoded)
insert into user (username, password, first_name, last_name, expertise) values ('doctor', '$2a$12$puWleO7YQE2yRh6ic1eniuftSLDfBE0NGoAqZEybHJktAy8Ms34Iu', 'dr', 'Docto', 'dr mr');
insert into user (username, password, first_name, last_name, expertise) values ('doctor1', '$2a$12$puWleO7YQE2yRh6ic1eniuftSLDfBE0NGoAqZEybHJktAy8Ms34Iu', 'dr', 'Docto', 'dr mr');
insert into user (username, password, first_name, last_name, expertise) values ('doctor2', '$2a$12$puWleO7YQE2yRh6ic1eniuftSLDfBE0NGoAqZEybHJktAy8Ms34Iu', 'dr', 'Docto', 'dr mr');

insert into user_roles (user_id, roles) values (1, 0); -- admin has ROLE_ADMIN
insert into user_roles (user_id, roles) values (2, 1); -- doctor has ROLE_DOCTOR
insert into user_roles (user_id, roles) values (3, 1); -- doctor has ROLE_DOCTOR
insert into user_roles (user_id, roles) values (4, 1); -- doctor has ROLE_DOCTOR

insert into cure_group (name) value ('analgetik');
insert into cure_group (name) value ('antibiotik');
insert into cure_group (name) value ('ostalo');

insert into symptom (name) values ('curenje iz nosa');
insert into symptom (name) values ('bol u grlu');
insert into symptom (name) values ('glavobolja');
insert into symptom (name) values ('kijanje');
insert into symptom (name) values ('kasalj');

insert into disease (name, groupe) values ('prehlada', 'grupa 1');

insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (1, 1, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (1, 2, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (1, 3, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (1, 4, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (1, 5, false, true);

insert into symptom (name) values ('temperatura veca od 38');
insert into symptom (name) values ('drhtavica');

insert into disease (name, groupe) values ('groznica', 'grupa 1');

insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (2, 4, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (2, 2, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (2, 5, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (2, 6, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (2, 1, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (2, 3, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (2, 7, false, true);


insert into symptom (name) values ('bol koji se siri do usiju');
insert into symptom (name) values ('temperatura od 40 do 41');
insert into symptom (name) values ('gubitak apetita');
insert into symptom (name) values ('umor');
insert into symptom (name) values ('zuti sekret iz nosa');

insert into disease (name, groupe) values ('upala krajnika', 'grupa 1');

insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (3, 2, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (3, 8, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (3, 3, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (3, 9, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (3, 7, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (3, 10, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (3, 11, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (3, 12, false, true);


insert into symptom (name) values ('oticanje oko ociju');

insert into disease (name, groupe) values ('sinusna infekcija', 'grupa 1');

insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (4, 13, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (4, 3, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (4, 12, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (4, 2, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (4, 6, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (4, 5, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (4, 27, false, false);

insert into symptom (name) values ('u poslednjih 6 meseci pacijent imao povisen pritisak (10 puta) ');

insert into disease (name, groupe) values ('hipertenzija', 'grupa 2');

insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (5, 14, false, false);

insert into symptom (name) values ('cesto uriniranje');
insert into symptom (name) values ('gubitak telesne tezine');
insert into symptom (name) values ('zamor');
insert into symptom (name) values ('mucnina i povracanje');

insert into disease (name, groupe) values ('dijabetes', 'grupa 2');

insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (6, 15, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (6, 16, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (6, 17, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (6, 18, false, true);

insert into symptom (name) values ('nocturia');
insert into symptom (name) values ('otoci nogu i zglobova');
insert into symptom (name) values ('gusenje');
insert into symptom (name) values ('bol u grudima');
insert into symptom (name) values ('*boluje od hipertenzije vise od 6 meseci');
insert into symptom (name) values ('*boluje od dijabetesa');

insert into disease (name, groupe) values ('hronicna bubrezna bolest', 'grupa 3');

insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (7, 17, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (7, 19, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (7, 20, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (7, 21, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (7, 22, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (7, 23, true, false);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (7, 24, true, false);

insert into symptom (name) values ('*oporavlja se od operacije');
insert into symptom (name) values ('dijareja');

insert into disease (name, groupe) values ('akutna bubrezna povreda', 'grupa 3');

insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (8, 25, true, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (8, 17, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (8, 21, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (8, 20, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (8, 26, false, true);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (8, 28, true, false);
insert into disease_symptom (disease_id, symptom_id, specific_symptom, show_symptom) values (8, 29, true, false);

insert into disease (name) values ('visok krvni pritisak');


insert into symptom (name) values ('*bolovao od prehlade ili groznice u poslednjih 60 dana');
insert into symptom (name) values ('*imao temperaturu u poslenjih 14 dana');
insert into symptom (name) values ('*u poslednjih 21 dan primao antibiotike');


insert into component (name) values ('component1');
insert into component (name) values ('component2');

insert into cure (name, group_id) values ('lek1', 1);
insert into cure (name, group_id) values ('lek2', 2);

insert into cure_component (cure_id, component_id) values (1,1);


insert into patient (first_name, last_name, doctor_id) values ('Petar', 'Petrovic', 2);
insert into patient (first_name, last_name, doctor_id) values ('Zika', 'Pavlovic', 2);

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (1, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (1, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (1, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (1, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (1, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (1, 1, 2, '2018-06-17 13:43:58');

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 1, 2, '2018-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 1, 2, '2018-06-17 13:43:58');

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 2, 2, '2015-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 2, 2, '2015-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 2, 2, '2015-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 2, 2, '2015-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 2, 2, '2015-06-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 2, 2, '2015-06-17 13:43:58');


/*insert into patient_disease (disease_id, patient_id, date) values (5, 1, '2017-01-17 13:43:58');
insert into patient_disease (disease_id, patient_id, date) values (6, 1, '2018-01-17 13:43:58');
*/
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 1, 2, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 1, 3, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 1, 4, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 1, 2, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 1, 2, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 1, 3, '2018-06-17 13:43:58');
/*
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (1, 13, 2, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (1, 13, 2, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (1, 13, 2, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (1, 13, 2, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (1, 13, 2, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (1, 13, 2, '2018-06-17 13:43:58');
*/

insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 7, 3, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 7, 3, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 7, 3, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 7, 3, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 7, 3, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 7, 3, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 7, 3, '2018-06-17 13:43:58');
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 7, 3, '2018-06-17 13:43:58');

insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (1, 14, 2, '2018-06-17 13:43:58');

insert into allergy_cure (cure_id, patient_id) values (1,1);

/*insert into alergic_component (component_id, patient_id) values (1,2);
*/


