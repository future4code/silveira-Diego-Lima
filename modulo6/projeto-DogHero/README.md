Case escolhido foi da DogHero
Consegui realizar tudo que foi solicitado

A API possui 3 endpoints sendo o primeiro de criação, segundo um index dos passeios já cadastrados que ser filtrado ou não e por ultimo endpoint que retorna o tempo real do passeio.



Para criação de um passeio é necessario informa no body os seguintes dados:
{     
    "data": "23/07/2022",
    "duracao": "60",
    "latitude": "25º25'48''Sul",
    "longitude": "49º16'15'' Oeste",
    "pets": 3,
    "inicio": 17.5,
    "fim":18
}

Sendo que tempo de duração é de 30 ou 60 min, valor diferente irá gerar um erro

o inicio e fim dos passeio, deverá considerar 30 min como 0,5
por exemplo 17:30 como 17,5

O Endpoint de pegar passeios com filtro pela data atual em diante ou sem 
Se desejar filtar informe "sim" na resquisição
O endpoint retorna uma lista ordenada e paginada.
Cada pagina retorna 5 resultados


Endpoint que retorna a duração real do passeio.


Teste foram realizados no endpoint de criação de passeio

Documentação da API

https://documenter.getpostman.com/view/20352107/UzXKXKV8
