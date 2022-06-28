# Introdução a Autenticação

### Exercício 1
a) Qual a sua opinião em relação a usar strings para representar os ids? Você concorda que seja melhor do que usar números?
*R: É bem melhor que usar somente numeros porque numeros são apenas 9 opções enquanto string pode ter mais possibilidades, oque dificulta a descriptografia.* 

### Exercício 2

a) Tem algumas coisas diferentes, mas basicamente foi criado uma variavel para guardar o nome da tabela,
e esta variavel esta sendo chamada no .INTO e não junto com o connection como costumava a fazer.
b)
CREATE TABLE user (
	id VARCHAR(255) PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL    
);
### Exercício 3
a) O que a linha as string faz? Por que precisamos usar ela ali?
*R: Força o token ser um string, para evitar erros no typescript* 

### Exercício 7
a)a) O que a linha as any faz? Por que precisamos usá-la ali?
*R: o tipo any aceita qualquer tipagem então é como se o payload pudesse receber qualquer valor que não terá no typescript* 

###  Exercício 8
