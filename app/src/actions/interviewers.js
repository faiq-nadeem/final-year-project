import { FETCH_ALL_INTERVIEWERS } from "../constants/actionTypes"
import * as api from "../api"

import { loaderStatus } from './loader'

// Action Creators
export const getInterviewers = () => async (dispatch) => {
	try {
		dispatch(loaderStatus({ status: true }))
		
		const { data } = await api.fetchInterviewers()

		dispatch({
			type: FETCH_ALL_INTERVIEWERS,
			payload: data,
		})
		
        dispatch(loaderStatus({ status: false }))
	} catch (error) {
		console.log(error)
	}
}