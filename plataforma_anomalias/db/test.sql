use plataforma_anomalias;

delete from usuarios where correo like '%@test.com';

insert into usuarios (nombre, correo, contraseña, imagen, activo) 
	values ('emp1', 'emp1@test.com', 'emp1_123', 'default.png', true);

insert into usuarios (nombre, correo, contraseña, imagen, activo) 
	values ('emp2', 'emp2@test.com', 'emp2_123', 'default.png', true);
    
insert into usuarios (nombre, correo, contraseña, imagen, activo) 
	values ('emp3', 'emp3@test.com', 'emp3_123', 'default.png', true);
    
insert into usuarios (nombre, correo, contraseña, imagen, activo) 
	values ('emp4', 'emp4@test.com', 'emp4_123', 'default.png', false);
    
insert into usuarios (nombre, correo, contraseña, imagen, activo) 
	values ('emp5', 'emp5@test.com', 'emp5_123', 'default.png', false);

select * from usuarios;


