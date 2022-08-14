
import React from 'react'
import { useNavigate } from 'react-router-dom'
import CardOrderHistory from '../../Components/CardOrderHistory/CardOrderHistory'
import Header from '../../Components/Header/Header'
import Menu from '../../Components/Menu/Menu'
import { BASE_URL } from '../../Constants/urls'
import useProtectedPage from '../../Hoocks/useProtectedPage'
import useRequestData from '../../Hoocks/useRequestData'
import { goToAddressEdit, goToProfileId } from '../../Routes/coordinator'
import { App, ConteinerHistory, ConteinerIcone, ConteinerUserInfo, DivUserStats, EditIconStyled, EditUser, EditUserAddress, Hr, Hr2 } from './styled'

const Profile = () => {
  useProtectedPage()

  const person = useRequestData({}, `${BASE_URL}/profile`)
  const order = useRequestData({}, `${BASE_URL}/orders/history`)
  const navigate = useNavigate()

  const converDate = (timeStamp) => {
    let time = new Date(timeStamp)
    let day = time.getDate().toString().padStart(2, '0')
    let month = (time.getMonth() + 1).toString().padStart(2, '0')
    let year = time.getFullYear()
    const date = `${day}/${month}/${year}`
    return date
  }
  
  
  return (
    <App>

      <Header title={"Meu Perfil"} back logout/>
      <Hr></Hr>

      <EditUser>
        <DivUserStats>
          <ConteinerUserInfo>
            <strong>{person[0].user && person[0].user.name}</strong>
            <strong>{person[0].user && person[0].user.email}</strong>
            <strong>{person[0].user && person[0].user.cpf}</strong>
          </ConteinerUserInfo>
          <ConteinerIcone>
            <EditIconStyled onClick={() => goToProfileId(navigate, person[0].user.id)} />
          </ConteinerIcone>
        </DivUserStats>

        <EditUserAddress>
          <DivUserStats>
            <ConteinerUserInfo>
              <p>Endereço Cadastrado</p>
              <strong>{person[0].user && person[0].user.address}</strong>
            </ConteinerUserInfo>
            <ConteinerIcone>
              <EditIconStyled onClick={() => goToAddressEdit(navigate, person[0].user.id)} />
            </ConteinerIcone>
          </DivUserStats>
        </EditUserAddress>
      </EditUser>
      <ConteinerHistory>
        <h3>Histórico de pedidos</h3>
        <Hr2></Hr2>
        {order[0].orders && order[0].orders.length > 0 ? order[0].orders && order[0].orders.map((order) => {
          return <CardOrderHistory order={order} date={converDate(order.createdAt)} key={order.createdAt} />
        }) : <p>Você não realizou nenhum pedido </p>}
      </ConteinerHistory>

      <Menu page={"profile"} />
    </App>


  )
}

export default Profile