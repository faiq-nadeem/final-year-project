import { ISLOADING } from '../constants/actionTypes'

export const loaderStatus = (isLoading) => (dispatch) => {
    try {
        dispatch({
            type: ISLOADING,
            isLoading
        })

    } catch (error) {
        console.log(error)
    }
}