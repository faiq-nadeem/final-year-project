import { STATUS } from '../constants/actionTypes'

export const loaderStatus = (status) => (dispatch) => {
    try {
        dispatch({
            type: STATUS,
            status
        })

    } catch (error) {
        console.log(error)
    }
}