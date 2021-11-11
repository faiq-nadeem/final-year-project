import { FETCH_ALL_USERS, FETCH_USER, UPDATE_USER } from "../constants/actionTypes"
import * as api from "../api"

import { loaderStatus } from './loader'

// Action Creators
export const getUsers = () => async (dispatch) => {
	try {
		dispatch(loaderStatus({ status: true }))
		
		const { data } = await api.fetchUsers()

		dispatch({
			type: FETCH_ALL_USERS,
			payload: data,
		})

        dispatch(loaderStatus({ status: false }))
	} catch (error) {
		console.log(error)
	}
}

export const getSingleUser = (id) => async (dispatch) => {
	try {
        const { data } = await api.fetchSingleUser(id)
        
		dispatch({
			type: FETCH_USER,
			payload: data,
		})
	} catch (error) {
		console.log(error)
	}
}

export const updateUser = (id, user) => async (dispatch) => {
	try {
		const { data } = await api.updatedUser(id, user)
		dispatch({
			type: UPDATE_USER,
			payload: data,
		})
	} catch (error) {
		console.log(error)
	}
}

export const setUserKey = (id, userKey) => async (dispatch) => {
	try {
		const { data } = await api.setUserKey(id, { userKey: userKey })
		dispatch({
			type: UPDATE,
			payload: data,
		})
	} catch (error) {
		console.log(error)
	}
}

export const addUserCredits = (id, credits) => async (dispatch) => {
	try {
		const { data } = await api.addUserCredits(id, { credits: credits })
		dispatch({
			type: UPDATE,
			payload: data,
		})
	} catch (error) {
		console.log(error)
	}
}
