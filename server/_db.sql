
create database twitter_clone;

create table users (
    uid uuid Primary key,
    name varchar(50),
    email varchar(50),
    password varchar(1024),
    date timestamp
);
