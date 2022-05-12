export const goToLogin = (navigate) => {
    navigate("/")
}
export const goToSignUp = (navigate) => {
    navigate("/cadastro")
}
export const goToPost = (navigate, id) => {
    navigate(`/post/${id}`)
}
export const goToFeed= (navigate) => {
    navigate("/feed")
}
export const goBack = (navigate) => {
    navigate(-1)
}
