import axios from 'axios'
import React, { useEffect, useState } from 'react'
import CardMovie from '../../components/CardMovie'
import { BASE_URL } from '../../constants/urls'
import { App, ContainerCardMovies, ContainerPages, Header, LogoContainer, ReactPaginateContainer, TagLogo, Titulo } from './styled'
import Logo from "../../assests/tmdb.svg"


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
        <App>
            <Header>
                <LogoContainer>
                <TagLogo src={Logo} />
                </LogoContainer>

                <Titulo>Milhões de filmes, séries e pessoas para descobrir. Explore já.</Titulo>
            </Header>
            <ContainerCardMovies>
                {feedMovies}
            </ContainerCardMovies>
            <ContainerPages>
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
            </ContainerPages>
        </App>
    )
}



export default HomePage