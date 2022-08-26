create table Usuarios (
 id_usuario int primary key auto_increment,
 nombre varchar(60) not null,
 correo varchar(60) not null,
 contraseña varchar(60) not null,
 imagen text not null,
 activo bool not null,
 creado timestamp not null default now(),
 actualizado timestamp
);