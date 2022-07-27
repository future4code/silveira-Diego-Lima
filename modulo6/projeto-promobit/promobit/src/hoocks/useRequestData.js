import { useEffect, useState } from "react";
import axios from "axios";


const useRequestData = (initialData, url) => {
    const [data, setData] = useState(initialData)
    const getData = () => {
        axios.get(url, {
            params: {
                api_key: 'c3fedfe220200db64b12b268d8e63d51'
            }

        })
            .then((res) => {
                setData(res.data)

            })
            .catch((err) => {
                console.log(err)
                alert("Ocorreu um erro")
            })
    }
    useEffect(() => {
        getData()
    }, [])

    return [data, getData]
}

export default useRequestData;
