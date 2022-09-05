create table Usuario_Permiso (
 id_usuario_permiso int primary key auto_increment,
 id_usuario int not null,
 id_permiso int not null,
 activo bool not null,
 creado timestamp not null default now(),
 actualizado timestamp
);