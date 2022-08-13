
export const goToLogin = (navigate) => {
    navigate('/login')
}

export const goToFeed = (navigate) => {
    navigate('/')
}
export const goToBack = (navigate) => {
    navigate(-1)
}

export const goToRestaurant = (navigate, id) => {
    navigate(`/feed/${id}`)
}

export const goToSignUp = (navigate) => {
    navigate('/signUp')
}

export const goToSignUpAddress = (navigate) => {
    navigate('/signUp/address')
}


export const goToProfile = (navigate) => {
    navigate('/profile')
}

export const goToProfileId = (navigate, id) => {
    navigate(`/profile/${id}`)
}
export const goToAddressEdit = (navigate, id) => {
    navigate(`/address/edit/${id}`)
}

export const goToCart = (navigate) => {
    navigate('/cart')
}