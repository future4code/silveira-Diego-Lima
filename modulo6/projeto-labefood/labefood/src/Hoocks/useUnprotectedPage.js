import { useNavigate } from "react-router";
import { useEffect } from "react";
import { goToFeed} from "../Routes/coordinator";


const useUnprotectdPage = () => {
    const navigate = useNavigate()
    useEffect(() => {
        const token = localStorage.getItem('token')
        if (token) {
            goToFeed(navigate)
        }
    },[navigate])
}

export default useUnprotectdPage;