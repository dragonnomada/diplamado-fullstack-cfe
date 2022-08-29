create table Comentarios (
 id_comentario int primary key auto_increment,
 id_anomalia int,
 id_usuario int not null,
 id_evidencia int unique,
 texto varchar(250) not null,
 creado timestamp not null default now()
);