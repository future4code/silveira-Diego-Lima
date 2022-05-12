import { useNavigate } from "react-router";
import { useLayoutEffect } from "react";
import { goToFeed} from "../routes/coordinator";


const useUnprotectdPage = () => {
    const navigate = useNavigate()
    useLayoutEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToFeed(navigate)
        }
    },[navigate])
}

export default useUnprotectdPage;