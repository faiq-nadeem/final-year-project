import express from 'express'
import auth from '../middleware/auth.js'

import { getSubCategories, createSubCategory, updateSubCategory, deleteSubCategory, changeSubCategoryStatus } from '../controllers/subCategories.js'

const router = express.Router()

router.get('/', getSubCategories)
router.post('/', auth, createSubCategory)
// router.get('/:id', getCategory)
router.patch('/:id', auth, updateSubCategory)
router.delete('/:id', auth, deleteSubCategory)
router.patch('/:id/changeSubCategoryStatus', auth, changeSubCategoryStatus)

export default router