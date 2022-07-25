import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../Pages/HomePage/homePage"
import MovieDetails from "../Pages/MovieDetails/movieDetails"


const Router = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route index element={<HomePage />} />
                <Route path="movie/:id" element={<MovieDetails />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router