use hamburgueria;

create table users(
    id int primary key auto_increment,
    nome varchar(65),
    email varchar(35),
    senha varchar(255),
    telefone varchar(14),
    cep varchar(8)
);

create table items(
    id int primary key auto_increment,
    nome varchar(35),
    id_users int,
    foreign key(id_users) references users(id)
);

create table carrinho(
    id int primary key auto_increment,
    produto_nome varchar(35),
    quantidade varchar(25),
    valor int
);

select id from users where email = 'wroberto216@gmail.com';

select c.nome, c.telefone, p.nome from users c, items p where c.email = p.id_users limit 1;