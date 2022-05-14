import { useNavigate } from "react-router";
import { useEffect } from "react";
import { goToLogin } from "../routes/coordinator";


const useProtectdPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) {
            goToLogin(navigate)
        }
    },[navigate])
}

export default useProtectdPage;