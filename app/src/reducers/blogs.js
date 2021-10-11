import { FETCH_ALL, UPDATE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (blogs = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload
      case UPDATE:
        return blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog))
      default:
        return blogs
    }
  }