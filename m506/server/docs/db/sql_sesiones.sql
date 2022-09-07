create table Sesiones (
 id_sesion int primary key auto_increment,
 id_usuario int not null,
 token varchar(255) not null,
 codigo text,
 meta text,
 iniciado timestamp,
 expira timestamp,
 creado timestamp not null default now(),
 actualizado timestamp
);