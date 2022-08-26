create table Anomalias (
 id_anomalia int primary key auto_increment,
 id_usuario int not null,
 id_ubicacion int not null unique,
 id_tipo_anomalia int,
 id_qr int not null unique,
 publicado timestamp,
 creado timestamp not null default now()
);