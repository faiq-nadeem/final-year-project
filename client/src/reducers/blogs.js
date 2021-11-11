import { FETCH_ALL_BLOGS, UPDATE_BLOG } from '../constants/actionTypes'

// eslint-disable-next-line import/no-anonymous-default-export
export default (blogs = [], action) => {
    switch (action.type) {
      case FETCH_ALL_BLOGS:
        return action.payload
      case UPDATE_BLOG:
        return blogs.map((blog) => (blog._id === action.payload._id ? action.payload : blog))
      default:
        return blogs
    }
  }