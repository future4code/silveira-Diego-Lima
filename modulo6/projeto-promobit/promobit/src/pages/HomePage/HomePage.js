import React, { useContext } from 'react'
import { GlobalStateContext } from '../../global/GlobalStateContext'


const HomePage = () => {
    const {moviePopularList} = useContext(GlobalStateContext)

     console.log(moviePopularList)   

    return (
        <div>homePage</div>
    )
}



export default HomePage