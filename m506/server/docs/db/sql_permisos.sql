create table Permisos (
 id_permiso int primary key auto_increment,
 descripcion varchar(250) not null,
 codigo text,
 activo bool not null,
 creado timestamp not null default now(),
 actualizado timestamp
);