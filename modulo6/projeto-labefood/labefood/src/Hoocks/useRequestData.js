import { useEffect, useState } from "react";
import axios from "axios";


const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const getData = async () => {
        await axios.get(url, {
            headers: {
                Auth: localStorage.getItem('token')
            }
        })
            .then((res) => {
                setData(res.data)

            })
            .catch((err) => {
                console.log(err)
                alert(err)
            })
    }
    useEffect(() => {
        getData()
    }, [])

    return [data, getData]
}

export default useRequestData;