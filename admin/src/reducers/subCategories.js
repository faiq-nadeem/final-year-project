import { FETCH_ALL_SUBCATEGORIES, CREATE_SUBCATEGORY, UPDATE_SUBCATEGORY, DELETE_SUBCATEGORY } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (subCategories = [], action) => {
    switch (action.type) {
      case FETCH_ALL_SUBCATEGORIES:
        return action.payload
      case CREATE_SUBCATEGORY:
        return [...subCategories, action.payload]
      case UPDATE_SUBCATEGORY:
        return subCategories.map((subCategory) => (subCategory._id === action.payload._id ? action.payload : subCategory))
      case DELETE_SUBCATEGORY: 
        return subCategories.filter((subCategory) => subCategory._id !== action.payload)
      default:
        return subCategories
    }
  }