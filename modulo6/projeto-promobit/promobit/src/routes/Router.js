import { BrowserRouter, Routes, Route } from "react-router-dom"
import MovieDetails from "../pages/MovieDetails/MovieDetails"
import HomePage from "../pages/HomePage/HomePage"

const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="movie/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router