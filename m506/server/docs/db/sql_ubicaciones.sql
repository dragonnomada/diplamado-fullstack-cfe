create table Ubicaciones (
 id_ubicacion int primary key auto_increment,
 id_usuario int not null,
 latitud double not null,
 longitud double not null,
 uuid varchar(255),
 info text,
 creado timestamp not null default now()
);