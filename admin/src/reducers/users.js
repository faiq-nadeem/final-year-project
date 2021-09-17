import { FETCH_ALL, UPDATE, DELETE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (users = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload
      case UPDATE:
        return users.map((user) => (user._id === action.payload._id ? action.payload : user))
      case DELETE: 
        return users.filter((user) => user._id !== action.payload)
      default:
        return users
    }
  }