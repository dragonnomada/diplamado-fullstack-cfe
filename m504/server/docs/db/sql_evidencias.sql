create table Evidencias (
 id_evidencia int primary key auto_increment,
 id_anomalia int not null,
 id_usuario int not null,
 id_ubicacion int not null unique,
 id_estado_anomalia int,
 id_archivo int,
 id_comentario int,
 creado timestamp not null default now()
);