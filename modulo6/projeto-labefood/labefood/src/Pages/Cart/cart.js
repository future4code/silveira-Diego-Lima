import React  from 'react'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import { useGlobal } from '../../Global/GlobalStateContext'
import { StyledButton } from '../../Global/GlobalStyled'
import PaymentMethod from './PaymentMethod'
import { ContainerCart, AddressUser, AddressRestaurant, ContainerPayment, MainCart, CardContainer, ImgContainer, InfoContainer, Info, ButtonRemove } from './styled'

const Cart = () => {
  const { addressUser } = useGlobal()
  const {productAdd, setProductAdd} =  useGlobal()


  const removerProduto = (produtos) => {
    const product = productAdd.find((item) => {
      return item.id === produtos.id
    })

    if (product.quantity <= 1) {
      const novoCarrinho = productAdd.filter((produto) => {
        return produto.id !== produtos.id
      })
      setProductAdd(novoCarrinho)
    } else {
      const novoCarrinho = productAdd.map((produto) => {
        if (produto.id === produtos.id) {
          const carrinho = { ...produto, quantity: produto.quantity - 1 }
          return carrinho
        }
        return produto
      })
      setProductAdd(novoCarrinho)
    }
  }


  const CarrinhoDeCompras = productAdd && productAdd.map((produto) => {
    return (
      <CardContainer>
        <div key={produto.id} >
          <ImgContainer src={produto.photoUrl} />
        </div>
        <InfoContainer>
          <strong>{produto.name}</strong>
          <Info>{produto.description}</Info>
         
          <p> {new Intl.NumberFormat('pt-BR', {
            style: 'currency',
            currency: 'BRL'
          }).format(`${produto.price}`)}</p>

          <p>Quantidade: {produto.quantity}</p>
          <ButtonRemove color='primary' variant="contained" onClick={() => removerProduto(produto)}>Remover</ButtonRemove>

        </InfoContainer>

      </CardContainer>
    )
  })


  return (
    <ContainerCart>
      <Header title={"Meu Carrinho"} back />

      <AddressUser>
        <p>Endereço de entrega</p>
        <p>{addressUser}</p>
      </AddressUser>
      <AddressRestaurant>
        {/* <p>{currentRestaurant.name}</p>
          <p>{currentRestaurant.address}</p> */}
      </AddressRestaurant>
          {CarrinhoDeCompras}
      {/* {CarrinhoDeCompras.length > 0 ? CarrinhoDeCompras : <p>Carrinho vazio</p>} */}


      <ContainerPayment>
        <PaymentMethod />
      </ContainerPayment>
      <StyledButton color='primary' variant="contained" >Gerar Pedido</StyledButton>
      


      <Menu page={"cart"}/>
    </ContainerCart>
  )
}

export default Cart