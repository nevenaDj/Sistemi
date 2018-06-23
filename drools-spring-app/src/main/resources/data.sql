
-- password is 'admin' (bcrypt encoded) 
insert into user (username, password) values ('admin', '$2a$12$ngKnzZiiHRoVIDB/RjJ8hOr5lIdTlzxksOgrPVGjXYk4wSFp.Cql6');
-- password is 'doctor' (bcrypt encoded)
insert into user (username, password, first_name, last_name, expertise) values ('doctor', '$2a$12$puWleO7YQE2yRh6ic1eniuftSLDfBE0NGoAqZEybHJktAy8Ms34Iu', 'Lekar', '1', 'dr');
insert into user (username, password, first_name, last_name, expertise) values ('doctor1', '$2a$12$puWleO7YQE2yRh6ic1eniuftSLDfBE0NGoAqZEybHJktAy8Ms34Iu', 'Lekar', '2', 'dr');
insert into user (username, password, first_name, last_name, expertise) values ('doctor2', '$2a$12$puWleO7YQE2yRh6ic1eniuftSLDfBE0NGoAqZEybHJktAy8Ms34Iu', 'Lekar', '3', 'dr');
insert into user (username, password, first_name, last_name, expertise) values ('doctor3', '$2a$12$puWleO7YQE2yRh6ic1eniuftSLDfBE0NGoAqZEybHJktAy8Ms34Iu', 'Lekar', '4', 'dr');

insert into user_roles (user_id, roles) values (1, 0); -- admin has ROLE_ADMIN
insert into user_roles (user_id, roles) values (2, 1); -- doctor has ROLE_DOCTOR
insert into user_roles (user_id, roles) values (3, 1); -- doctor has ROLE_DOCTOR
insert into user_roles (user_id, roles) values (4, 1); -- doctor has ROLE_DOCTOR
insert into user_roles (user_id, roles) values (5, 1); -- doctor has ROLE_DOCTOR

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


insert into component (name) values ('komponenta1');
insert into component (name) values ('komponenta2');
insert into component (name) values ('komponenta3');
insert into component (name) values ('komponanta4');
insert into component (name) values ('komponenta5');
insert into component (name) values ('komponenta6');

insert into cure (name, group_id) values ('lek1', 1);
insert into cure (name, group_id) values ('lek2', 2);
insert into cure (name, group_id) values ('lek3', 1);
insert into cure (name, group_id) values ('lek4', 2);
insert into cure (name, group_id) values ('lek5', 1);
insert into cure (name, group_id) values ('lek6', 3);

insert into cure_component (cure_id, component_id) values (1,1);
insert into cure_component (cure_id, component_id) values (1,2);
insert into cure_component (cure_id, component_id) values (1,3);
insert into cure_component (cure_id, component_id) values (1,4);
insert into cure_component (cure_id, component_id) values (1,5);
insert into cure_component (cure_id, component_id) values (2,1);
insert into cure_component (cure_id, component_id) values (3,2);
insert into cure_component (cure_id, component_id) values (3,3);
insert into cure_component (cure_id, component_id) values (4,1);
insert into cure_component (cure_id, component_id) values (4,2);
insert into cure_component (cure_id, component_id) values (5,2);
insert into cure_component (cure_id, component_id) values (5,3);
insert into cure_component (cure_id, component_id) values (6,1);
insert into cure_component (cure_id, component_id) values (6,2);


insert into patient (first_name, last_name, doctor_id) values ('Petar', 'Petrovic', 2);
insert into patient (first_name, last_name, doctor_id) values ('Zika', 'Pavlovic', 2);
insert into patient (first_name, last_name, doctor_id) values ('Aleksandar', 'Aleksic', 2);
insert into patient (first_name, last_name, doctor_id) values ('Ivana', 'Ivanovic', 5);
insert into patient (first_name, last_name, doctor_id) values ('Jelena', 'Jovanovic', 4);
insert into patient (first_name, last_name, doctor_id) values ('Ana', 'Pavlovic', 3);


insert into patient_disease (disease_id, patient_id, doctor_id, date) values (1, 1, 2, '2018-06-17 13:43:58');  -- bolovao od prehlade ili groznice u poslednjih 60 dana
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (1, 1, 2, '2018-06-17 13:50:58');

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-04-14 14:43:58');  -- u poslednjih 6 meseci bar 10 puta visok pritisak
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-03-07 19:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-05-01 11:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-04-21 09:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-05-23 08:33:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-06-17 13:23:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-06-19 13:13:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-06-20 11:45:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-01-17 13:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-02-13 15:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-02-19 15:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 2, 2, '2018-03-25 16:43:58');

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (5, 3, 4, '2017-11-01 16:43:58');  -- boluje od hipertenzije vise od 6 meseci

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (6, 4, 3, '2018-01-01 12:22:58');  -- boluje od dijabetisa

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 3, 3, '2018-06-10 12:22:58');  -- u poslednjih 14 dana bolest koja kao simptom ima povisenu temperaturu 

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (2, 1, 4, '2018-06-10 12:22:58');  -- u poslednjih 21 dana bolest za koju je primao antibiotike
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 17, 4, '2018-06-10 12:33:58');

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 2, 2, '2017-04-14 14:43:58');  -- hronicno oboljenje
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 2, 2, '2017-03-07 19:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 2, 2, '2018-05-01 11:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 2, 2, '2018-04-21 09:43:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 2, 2, '2018-05-23 08:33:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 2, 2, '2018-06-17 13:23:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 2, 2, '2018-06-19 13:13:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 2, 2, '2016-10-20 11:45:58');


insert into patient_disease (disease_id, patient_id, doctor_id, date) values (2, 1, 4, '2018-05-17 13:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (3, 26, 4, '2018-05-17 13:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (2, 1, 3, '2018-05-25 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (3, 27, 3, '2018-05-25 18:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 1, 5, '2018-05-29 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (5, 28, 5, '2018-05-29 18:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (8, 1, 4, '2018-02-28 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (5, 29, 4, '2018-02-28 18:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (9, 1, 3, '2018-01-29 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (5, 30, 3, '2018-01-29 18:50:58');

insert into patient_disease (disease_id, patient_id, doctor_id, date) values (1, 6, 4, '2018-05-01 13:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 31, 4, '2018-05-01 13:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (3, 6, 3, '2018-05-05 18:49:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 32, 3, '2018-05-05 18:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 6, 5, '2017-05-29 11:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (4, 33, 5, '2017-05-29 11:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (8, 6, 4, '2018-02-28 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (4, 34, 4, '2018-02-28 18:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (8, 6, 3, '2018-01-29 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 35, 3, '2018-01-29 18:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (2, 6, 4, '2018-05-17 13:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (2, 36, 4, '2018-05-17 13:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (2, 6, 3, '2018-05-25 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (4, 37, 3, '2018-05-25 18:05:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (4, 6, 5, '2018-05-29 18:10:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (4, 38, 5, '2018-05-29 18:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (8, 6, 4, '2018-02-28 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (4, 39, 4, '2018-02-28 18:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (6, 6, 3, '2017-01-29 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (4, 40, 3, '2017-01-29 18:50:58');
insert into patient_disease (disease_id, patient_id, doctor_id, date) values (7, 6, 3, '2017-12-12 18:43:58');  
insert into patient_cure (cure_id, patient_disease_id, doctor_id, date) values (4, 41, 3, '2017-12-12 18:50:58');

insert into allergy_cure (cure_id, patient_id) values (1,6);