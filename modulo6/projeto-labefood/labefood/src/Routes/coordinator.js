
export const goToLogin = (navigate) => {
    navigate('/')
}

export const goToFeed = (navigate) => {
    navigate('/feed')
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