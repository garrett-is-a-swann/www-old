drop table if exists noun_user cascade;
create table noun_user
(
    id SERIAL
    ,first_name varchar(50)
    ,last_name varchar(256)
    ,email varchar(325) UNIQUE NOT NULL
    ,date_created TIMESTAMP NOT NULL
    ,PRIMARY KEY(id)
);

drop table if exists verb_login;
create table verb_login
(
    id SERIAL
    ,username varchar(64) UNIQUE NOT NULL
    ,password_salt varchar(64) NOT NULL
    ,password_hash varchar(256) NOT NULL
    ,user_id integer NOT NULL
    ,permission smallint NOT NULL
    ,date_created TIMESTAMP NOT NULL
    ,PRIMARY KEY(id)
    ,FOREIGN KEY(user_id) REFERENCES noun_user (id)
);
