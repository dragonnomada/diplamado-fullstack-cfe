create table Archivos (
 id_archivo int primary key auto_increment,
 id_usuario int not null,
 id_ubicacion int not null unique,
 ruta varchar(255) not null,
 tipo varchar(255) not null,
 info text,
 meta text,
 creado timestamp default now()
);