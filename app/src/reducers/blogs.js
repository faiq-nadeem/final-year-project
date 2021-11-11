import { FETCH_ALL_BLOGS } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (blogs = [], action) => {
    switch (action.type) {
      case FETCH_ALL_BLOGS:
        return action.payload
      default:
        return blogs
    }
  }