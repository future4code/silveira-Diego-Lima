# Aprofundamento SQL

### Exercício 1
a) Explique o que é uma chave estrangeira
*R: A Chave estabelece o vinculo entre as duas tabelas* 
b)CREATE TABLE Rating (
		id VARCHAR(255) PRIMARY KEY,
    comment TEXT NOT NULL,
		rate FLOAT NOT NULL,
    movie_id VARCHAR(255),
    FOREIGN KEY (movie_id) REFERENCES Movie(id) ),
INSERT INTO Rating VALUES
('sfv','Otimo filme para assistir na sessão da tarde' , 10, '001')    
c) Tente criar uma avaliação para um filme que não existe (ou seja, um id inválido). Anote e explique o resultado da query.
*R: houve uma falha na foreign key e não possivel adicionar uma linha filha* 
d) ALTER TABLE Movie DROP COLUMN rating;
e) *R: houve uma falha na foreign key e não possivel deletar uma linha pai* 

### Exercício 2
a) *R: É uma tabela intermediaria que vincula as linhas de outras duas tabelas*
b) INSERT INTO MovieCast(movie_id, actor_id)
VALUES("004", "001")
c)*R: houve uma falha na foreign key e não possivel adicionar uma linha filha*
d)*R: houve uma falha na foreign key e não possivel deletar uma linha pai, no caso o ator*
### Exercício 3
a) SELECT * FROM Movie 
INNER JOIN Rating ON Movie.id = Rating.movie_id;
* Essa query exibe a lista de filmes relacionando as duas tabelas, rating e filmes
Sem o ON ele não vincula corretamente os ID então como são 4 filmes
as possiveis combinações são 4X4 = 16 relações possiveis. E os dados ficam bagunçados. 
O operador ON impede que isso ocorra.

b) Escreva uma query que retorne somente o nome, id e nota de avaliação dos filmes que já foram avaliados.
* SELECT m.id as movie_id, m.title as movie_name, r.rate as rating FROM Movie m
    INNER JOIN Rating r ON m.id = r.movie_id;









