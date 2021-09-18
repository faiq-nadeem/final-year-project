import express from 'express'
import auth from '../middleware/auth.js'

import { getBlogs, createBlog, updateBlog, likeBlog, deleteBlog, changeBlogStatus } from '../controllers/blogs.js'

const router = express.Router()

router.get('/', getBlogs)
router.post('/', auth, createBlog)
// router.get('/:id', getBlog)
router.patch('/:id', auth, updateBlog)
router.delete('/:id', auth, deleteBlog)
router.patch('/:id/likeBlog', auth, likeBlog)
router.patch('/:id/changeBlogStatus', auth, changeBlogStatus)

export default router