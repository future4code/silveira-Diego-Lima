# Aprofundamento SQL

### Exercício 1
a) DROP COLUMN salary irá deletar a coluna salário da tabela Actor
b)CHANGE altera a coluna gender para sex VARCHAR(6)
c)CHANGE altera gender com VARCHAR(255) aumenta a quantidade de caracteres
d) ALTER TABLE Actor CHANGE gender gender VARCHAR(100)

### Exercício 2
a) UPDATE Actor 
SET name = "Paolla Oliveira" 
birth_data = 1982-06/07 
WHERE id = "003"
b) UPDATE Actor
SET name = "JULIANA PAES"
WHERE name = "Juliana Paes"
c)UPDATE Actor
SET
name = "Reynaldo Gianecchini"
bith_date = "1980-05-15"
salary = 600000,
gender = "male"
WHERE id = "005"
d) Nenhum erro é acusado no MySQL porem não é atualizado nenhuma informação da query
### Exercício 3
a) DELETE FROM Actor 
WHERE name = "Fernanda Montenegro"
b) DELETE FROM Actor 
WHERE gender = "male" AND salary > 1000000

### Exercício 4
a) SELECT AVG(salary) FROM Actor

b) SELECT MIN(salary)
FROM Actor WHERE gender = "female"

c) SELECT COUNT(*) FROM Actor
WHERE gender = "female"

d) SELECT SUM(salary) FROM Actor;

### Exercício 5
a) Essa query informa a quantidade de atores da lista separados por gênero.

b) SELECT id, name FROM Actor
ORDER BY name DESC;

c) SELECT * FROM Actor 
ORDER BY salary;

d) SELECT * FROM Actor
ORDER BY salary ASC
LIMIT 3;

e) SELECT AVG(salary), gender FROM Actor
GROUP BY gender

### Exercício 6
a) ALTER TABLE Movie ADD playing_limit_date DATE;

b) ALTER TABLE Movie CHANGE rating rating FLOAT;

c) UPDATE Movie SET playing_limit_date = "2021-05-15" WHERE id = "001";

d) DELETE FROM Movie WHERE id = "001";














