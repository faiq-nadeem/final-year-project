import express from 'express'
import mongoose from 'mongoose'

import SubCategory from '../models/subCategory.js'

const router = express.Router()

export const getSubCategories = async (req, res) => { 
    try {
        const subCategory = await SubCategory.find()
                
        res.status(200).json(subCategory)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createSubCategory = async (req, res) => {
    const subCategory = req.body

    const newSubCategory = new SubCategory({ ...subCategory, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newSubCategory.save()

        res.status(201).json(newSubCategory )
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateSubCategory = async (req, res) => {
    const { id }                                          = req.params
    const { title, categoryId, message, selectedFile, tags } = req.body
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No subCategory with id: ${id}`)

    const updatedSubCategory = { categoryId, title, message, tags, selectedFile, _id: id }

    await SubCategory.findByIdAndUpdate(id, updatedSubCategory, { new: true })

    res.json(updatedSubCategory)
}

export const deleteSubCategory = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No subCategory with id: ${id}`)

    await SubCategory.findByIdAndRemove(id)

    res.json({ message: "SubCategory deleted successfully." })
}

export const changeSubCategoryStatus = async (req, res) => {
    const { id } = req.params

    res.userId

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No subCategory with id: ${id}`)
    
    const subCategory = await SubCategory.findById(id)

    if(subCategory.subCategoryStatus === 'active'){
        subCategory.subCategoryStatus = 'inactive'
    } else{
        subCategory.subCategoryStatus = 'active'
    }

    const updatedSubCategory = await SubCategory.findByIdAndUpdate(id, subCategory, { new: true })
    
    res.json(updatedSubCategory)
}

export default router