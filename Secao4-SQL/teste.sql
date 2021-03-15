CREATE TABLE usuarios(
    nome VARCHAR(50),
    email VARCHAR(100),
    idade INT
);

INSERT INTO usuarios
    (idade, email, nome) VALUES(
        9,
        "loka.teste@gmail.com",
        "Loka luka"
);

SELECT * FROM usuarios;

SELECT * FROM usuarios WHERE idade = 24;

SELECT * FROM usuarios WHERE nome = "Lucas Santos";

SELECT * FROM usuarios WHERE idade >= 18;