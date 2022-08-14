# Case Labefood

### Utilizei o layout do 4 foods que esta no link 
https://app.zeplin.io/project/5dd5ab8e5fb2a0060f81698f/dashboard?sid=5dd5abbf02a45905bad99a96

Documentação da API utilizada 
https://documenter.getpostman.com/view/7549981/SWTEdGtT


### Deploy realizado no surge
https://4foodapp-labefood.surge.sh/

## Paginas e funcionalidades implementadas

- **Fluxo de Login/Cadastro**
    - O usuário é capaz de criar uma conta, cadastrando seus dados pessoais e seu endereço
    - Caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário receberá uma mensagem de erro clara
    - Após finalizar o cadastro, o usuário é redirecionado para a tela de lista de restaurantes
- **Busca e Seleção de Restaurantes**
    - O usuário é capaz de visualizar uma lista com todos os restaurantes
    - O usuário é capaz de buscar um restaurante por nome
    - O usuário é capaz de filtrar os restaurantes por categoria
    - O usuário é capaz de clicar no card de um restaurante para visualizar a tela com seu cardápio
- **Cardápio do Restaurante**
    - O usuário é capaz de visualizar as informações do restaurante (foto, nome, tipo, tempo de entrega, frete, endereço)
    - O usuário  de visualizar os pratos do restaurante, divididos em categorias (exemplo: principais, sobremesas, entradas, etc)
    - O usuário é capaz de visualizar as informações de cada prato (foto, nome, descrição, preço)
    - O usuário é capaz de adicionar pratos no carrinho e selecionar a quantidade de cada prato
    - O usuário é capaz de remover itens do carrinho
- **Carrinho e Finalizar Compra**
    - O usuário é capaz de visualizar a lista de itens que adicionou ao carrinho. Caso não tenha adicionado nenhum item, aparecerá uma mensagem de "Carrinho Vazio"
    - O usuário  visualizará, no topo da tela, o endereço de entrega
    - O usuário visualizará o preço total da compra somado com o valor de frete
    - O usuário é capaz de selecionar uma forma de pagamento dentre as opções de cartão e dinheiro
    - Ao concluir um pedido usuário é redirecionado ao feed e  verá um banner de "Pedido em Andamento" com os dados do pedido(nome do restaurante e valor da compra)

- **Perfil, Editar Perfil e Histórico de Pedidos**
    - O usuário é capaz de visualizar seus dados pessoais e endereço
    - O usuário é capaz de editar seus dados pessoais e endereço
    
    - Ao editar as informações, caso insira alguma informação incorreta ou deixe de inserir alguma informação obrigatória, o usuário receberá uma mensagem de erro, após editar com sucesso é redirecionado a pagina de perfil atualizada

    - O usuário é capaz de visualizar o seu histórico de pedidos concluídos  (após o tempo de entrega do informado pelo estabelecimento)


Utilize comando npm install para instalação localmente das bibliotecas utilizadas.