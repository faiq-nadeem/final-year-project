import { FETCH_ALL, CREATE, UPDATE, DELETE } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (blogs = [], action) => {
    switch (action.type) {
      case FETCH_ALL:
        return action.payload
      case CREATE:
        return [...blogs, action.payload]
      case UPDATE:
        return blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog))
      case DELETE: 
        return blogs.filter((blog) => blog._id !== action.payload)
      default:
        return blogs
    }
  }