import { FETCH_ALL_CATEGORIES, UPDATE_CATEGORY } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (categories = [], action) => {
    switch (action.type) {
      case FETCH_ALL_CATEGORIES:
        return action.payload
     case UPDATE_CATEGORY:
        return categories.map((category) => (category._id === action.payload._id ? action.payload : category))
      default:
        return categories
    }
  }