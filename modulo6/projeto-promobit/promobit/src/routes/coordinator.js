export const goBack = (navigate) => {
    navigate(-1)
}

export const goToMovieDetails = (navigate, id) => {
    navigate(`/movie/${id}`)
}