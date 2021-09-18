import express from 'express'
import auth from '../middleware/auth.js'

import { getCategories, createCategory, updateCategory, deleteCategory, changeCategoryStatus } from '../controllers/categories.js'

const router = express.Router()

router.get('/', getCategories)
router.post('/', auth, createCategory)
// router.get('/:id', getCategory)
router.patch('/:id', auth, updateCategory)
router.delete('/:id', auth, deleteCategory)
router.patch('/:id/changeCategoryStatus', auth, changeCategoryStatus)

export default router