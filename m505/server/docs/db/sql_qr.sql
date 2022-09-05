create table QR (
 id_qr int primary key auto_increment,
 id_ubicacion int not null unique,
 texto text,
 imagen text,
 creado timestamp not null default now()
);