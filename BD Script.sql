create database soulsbuilds;

use soulsbuilds;


create user 'insert'@'localhost' identified by 'insert';
	grant insert on * to 'insert';
    
create user 'select'@'localhost' identified by 'select';
	grant select on * to 'select';
    
create table boss_status (
fk_boss int,
effect_status varchar(45),
fk_status int,
	constraint fk_status foreign key (fk_status) references status (fk_status)
);

insert into boss_status values 
	(1,'Resistance', 1),
	(1,'Resistance', 2),
	(1,'Weakness', 3),
	(1,'Weakness', 4),
	(2,'Resistance', 9),
	(2,'Weakness', 3),
	(2,'Weakness', 1),
	(3,'Resistance', 10),
	(3,'Weakness', 3),
	(3,'Weakness', 9),
	(4,'Resistance', 7),
	(4,'Weakness', 6),
	(4,'Weakness', 5),
	(5,'Resistance', 1),
	(5,'Resistance', 2),
	(5,'Weakness', 8),
	(6,'Resistance', 7),
	(6,'Resistance', 1),
	(6,'Resistance', 2),
	(6,'Weakness', 10),
	(7,'Resistance', 1),
	(7,'Resistance', 10),
	(8,'Resistance', 3),
	(8,'Weakness', 1),
	(9,'Resistance', 6),
	(9,'Resistance', 5),
	(9,'Resistance', 2),
	(9,'Weakness', 10),
	(10,'Resistance', 9),
	(10,'Weakness', 8),
	(11,'Resistance', 1),
	(11,'Resistance', 7),
	(11,'Weakness', 8),
	(11,'Weakness', 3),
	(12,'Resistance', 2),
	(12,'Weakness', 1),
	(12,'Weakness', 8),
	(13,'Resistance', 1),
	(13,'Resistance', 8),
	(13,'Weakness', 4),
	(14,'Resistance', 7),
	(14,'Resistance', 2),
	(14,'Weakness', 8),
	(15,'Resistance', 5),
	(15,'Resistance', 6),
	(15,'Resistance', 2),
	(15,'Weakness', 8),
	(16,'Resistance', 1),
	(16,'Weakness', 8),
	(16,'Weakness', 4),
	(17,'Resistance', 6),
	(17,'Resistance', 5),
	(17,'Weakness', 8),
	(18,'Resistance', 7),
	(18,'Weakness', 3),
	(19,'Resistance', 3),
	(19,'Weakness', 8);

    

insert into status values
	(1, 'Dark'),
	(2, 'Bleed'),
	(3, 'Fire'),
	(4, 'Frost'),
	(5, 'Poison'),
	(6, 'Toxic'),
	(7, 'Magic'),
	(8, 'Lighning'),
    (9, 'Slash'),
    (10, 'None');

select 
bosses.name,
status.id_status,
status.status
	from bosses join boss_status
	on fkBoss = id_boss
    join soulsbuilds.status
		on id_status = fk_status;
	
create table usuario (
id_user int primary key auto_increment,
nome varchar(45),
email varchar(80),
password varchar(45),
ds_experience int
);

create table build (
id_build int primary key auto_increment,
name varchar(45),
perks varchar(45),
level int,
fk_user int,
	constraint fk_user foreign key(fk_user) references usuario (id_user),
fk_perks int,
	constraint fk_perks foreign key(fk_perks) references perks (id_perks)
);


create table dificuldade (
fk_boss int,
fk_build int,
fk_user int,
dificuldade int,
	foreign key (fk_boss) references bosses (id_boss),
	foreign key (fk_build) references build (id_build),
	foreign key (fk_user) references usuario (id_user)
);

create table status(
id_status int primary key auto_increment,
status varchar(45)
);

create table perks(
id_perks int primary key auto_increment,
vigor int,
attunement int,
endurance int,
vitality int,
strength int,
dexterity int,
intelligence int,
faith int,
luck int
);

create table bosses(
id_boss int primary key,
name varchar(45),
health_points int,
souls int
);

insert into bosses values
	(1, 'Iudex Gundyr', 1037, 3000),
	(2, 'Vordt of the Boreal Valley', 1328, 3000),
	(3, 'Curse-Rotted Greatwood', 5405, 7000),
	(4, 'Crstal Sage', 2723, 8000),
	(5, 'Abyss Watchers', 1548, 18000),
	(6, 'Deacons of the Deep', 4099, 13000),
	(7, 'High Lord Wolnir', 15041, 22000),
	(8, 'Old Demon King', 5301, 25000),
	(9, 'Pontiff Sulyvahn', 5106, 28000),
	(10, 'Yhorm the Giant', 27822, 36000),
	(11, 'Aldrich, Devourer of Gods', 4727, 50000),
	(12, 'Dancer of the Boreal Valley', 5111, 60000),
	(13, 'Dragonslayer Armour', 4581, 48000),
	(14, 'Oceiros, the Consumed King', 8087, 58000),
	(15, 'Champion Gundyr', 4956, 60000),
	(16, 'Lothric, Younger Prince', 4294, 85000),
	(17, 'Ancient Wyvern', 7873, 70000),
	(18, 'Nameless King', 4577, 80000),
	(19, 'Soul of Cinder', 6557, 100000);
    
    
    
