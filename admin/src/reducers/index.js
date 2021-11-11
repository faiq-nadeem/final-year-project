import { combineReducers } from "redux"

import categories from './categories'
import subCategories from './subCategories'
import blogs from './blogs'
import users from './users'
import advisors from './advisors'
import interviewers from './interviewers'
import auth from './auth'
import isLoading from './loader'

export default combineReducers({ categories, subCategories, blogs, users, advisors, interviewers, auth, isLoading})