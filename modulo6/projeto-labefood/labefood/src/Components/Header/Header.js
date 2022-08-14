import { ArrowBackIosNew } from '@mui/icons-material'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { goToBack, goToLogin } from '../../Routes/coordinator'
import { ContainerHeader, Title } from './styled'
import ExitToAppIcon from '@mui/icons-material/ExitToApp';

const Header = ({ title, back, logout }) => {

    const navigate = useNavigate()

    const removeToken = () => {
        window.localStorage.removeItem("token")
        goToLogin(navigate)
    }


    return (
        <ContainerHeader>
            {back && <ArrowBackIosNew onClick={() => goToBack(navigate)} />}
            <Title>{title}</Title>
            {logout && <ExitToAppIcon onClick={() => removeToken()}/>}
        </ContainerHeader>
    )
}

export default Header