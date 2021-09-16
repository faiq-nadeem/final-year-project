import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (subCategories = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload
      case CREATE:
        return [...subCategories, action.payload]
      case UPDATE:
        return subCategories.map((subCategory) => (subCategory._id === action.payload._id ? action.payload : subCategory))
      case DELETE: 
        return subCategories.filter((subCategory) => subCategory._id !== action.payload)
      default:
        return subCategories
    }
  }