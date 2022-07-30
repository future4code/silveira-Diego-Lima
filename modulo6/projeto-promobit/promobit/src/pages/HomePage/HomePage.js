import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie'
import { BASE_URL } from '../../constants/urls'
import { ContainerCardMovies, FakeDiv, Header, ReactPaginateContainer, Titulo } from './styled'



const HomePage = () => {
    const [moviePopularList, setMoviePopularList] = useState([])
    const [pageNumber, setPageNumber] = useState();

    const getMoviePopular = () => {

        axios.get(`${BASE_URL}/movie/popular?api_key=c3fedfe220200db64b12b268d8e63d51&language=pt-BR&page=${pageNumber}`)
            .then((response) => {
                setMoviePopularList(response.data.results);
            }).catch((error) => console.log(error));

    };

    useEffect(() => {
        getMoviePopular();

    }, [pageNumber]);


    const feedMovies = moviePopularList && moviePopularList.map((movie) => {
        return (
            <CardMovie key={movie.id}
                movie={movie}
            />
        )
    })

    const changePage = ({ selected }) => {
        setPageNumber(selected + 1);
    };


    return (
        <div>
            <Header>
                <Titulo>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Titulo>
            </Header>
            <ContainerCardMovies>
                {feedMovies}
            </ContainerCardMovies>
            <ReactPaginateContainer
                previousLabel={"Anterior"}
                nextLabel={"Próxima"}
                pageCount={50}
                onPageChange={changePage}
                containerClassName={"paginationButtons"}
                previousLinkClassName={"previousButton"}
                nextLinkClassName={"nextButton"}
                disabledClassName={"paginationDisabled"}
                activeClassName={"paginationActive"}
            />

        </div>
    )
}



export default HomePage