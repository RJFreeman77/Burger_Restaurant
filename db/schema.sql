DROP DATABASE IF EXISTS burgers_db;
CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT NOT NULL PRIMARY KEY AUTO_INCREMENT
    , burger_name VARCHAR(100) NOT NULL
    , served BOOLEAN NOT NULL DEFAULT 0
    , ingredients VARCHAR (1000) NULL
);