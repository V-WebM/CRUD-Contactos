CREATE DATABASE laboratorio13;
USE laboratorio13;

CREATE TABLE contactos (
    id INT(4) AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(50) NOT NULL,
    apellidos VARCHAR(100) NOT NULL,
    correo VARCHAR(100) NOT NULL,
    fecha_nac varchar(10),
    foto VARCHAR(500)
);

SHOW TABLES;

DESCRIBE contactos;

select * from Contactos;
insert into Contactos (nombre,apellidos,correo,fecha_nac,foto) Values ('Fabian','Garcia','fabian@abc.com','02-06-07','imagen');

ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY 'Tecsup';

DROP table Contactos;
