create table Estado_Anomalia (
 id_estado_anomalia int primary key auto_increment,
 descripcion varchar(250),
 codigo text,
 creado timestamp not null,
 actualizado timestamp default now()
);