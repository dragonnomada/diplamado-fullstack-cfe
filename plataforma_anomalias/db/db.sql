
drop database if exists plataforma_anomalias;

create database plataforma_anomalias;

use plataforma_anomalias;

create table Anomalias (
 id_anomalia int primary key auto_increment,
 id_usuario int not null unique,
 id_ubicacion int not null unique,
 id_tipo_anomalia int,
 id_qr int not null unique,
 publicado timestamp,
 creado timestamp not null
);

create table Archivos (
 id_archivo int primary key auto_increment,
 id_usuario int not null unique,
 id_ubicacion int not null unique,
 ruta varchar(255) not null,
 tipo varchar(255) not null,
 info text,
 meta text,
 creado timestamp
);

create table Comentarios (
 id_comentario int primary key auto_increment,
 id_anomalia int,
 id_usuario int not null,
 id_evidencia int unique,
 texto varchar(250) not null,
 creado timestamp not null
);

create table Estado_Anomalia (
 id_estado_anomalia int primary key auto_increment,
 descripcion varchar(250),
 codigo text,
 creado timestamp not null,
 actualizado timestamp
);

create table Evidencias (
 id_evidencia int primary key auto_increment,
 id_anomalia int not null,
 id_usuario int not null unique,
 id_ubicacion int not null unique,
 id_estado_anomalia int,
 id_archivo int,
 id_comentario int,
 creado timestamp not null
);

create table Permisos (
 id_permiso int primary key auto_increment,
 descripcion varchar(250) not null,
 codigo text,
 activo bool not null,
 creado timestamp not null,
 actualizado timestamp
);

create table QR (
 id_qr int primary key auto_increment,
 id_ubicacion int not null unique,
 texto text,
 imagen text,
 creado timestamp not null
);

create table Sesiones (
 id_sesion int primary key auto_increment,
 id_usuario int not null unique,
 token varchar(255) not null,
 codigo text,
 meta text,
 iniciado timestamp,
 expira timestamp,
 creado timestamp not null,
 actualizado timestamp
);

create table Tipo_Anomalia (
 id_estado_anomalia int primary key auto_increment,
 descripcion varchar(250),
 codigo text,
 creado timestamp not null,
 actualizado timestamp
);

create table Ubicaciones (
 id_ubicacion int primary key auto_increment,
 id_usuario int not null unique,
 latitud double not null,
 longitud double not null,
 uuid varchar(255),
 info text
);

create table Usuario_Permiso (
 id_usuario_permiso int primary key auto_increment,
 id_usuario int not null,
 id_permiso int not null,
 activo bool not null,
 creado timestamp not null,
 actualizado timestamp
);

create table Usuarios (
 id_usuario int primary key auto_increment,
 nombre varchar(60) not null,
 correo varchar(60) not null,
 contraseña varchar(60) not null,
 imagen text not null,
 activo bool not null,
 creado timestamp not null,
 actualizado timestamp
);
