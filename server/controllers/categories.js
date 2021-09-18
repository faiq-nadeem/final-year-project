import express from 'express'
import mongoose from 'mongoose'

import Category from '../models/category.js'

const router = express.Router()

export const getCategories = async (req, res) => { 
    try {
        const category = await Category.find()
                
        res.status(200).json(category)
    } catch (error) {
        res.status(404).json({ message: error.message })
    }
}

export const createCategory = async (req, res) => {
    const category = req.body

    const newCategory = new Category({ ...category, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newCategory.save()

        res.status(201).json(newCategory )
    } catch (error) {
        res.status(409).json({ message: error.message })
    }
}

export const updateCategory = async (req, res) => {
    const { id }                                          = req.params
    const { title, message, creator, selectedFile, tags } = req.body
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`)

    const updatedCategory = { creator, title, message, tags, selectedFile, _id: id }

    await Category.findByIdAndUpdate(id, updatedCategory, { new: true })

    res.json(updatedCategory)
}

export const deleteCategory = async (req, res) => {
    const { id } = req.params

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`)

    await Category.findByIdAndRemove(id)

    res.json({ message: "Category deleted successfully." })
}

export const changeCategoryStatus = async (req, res) => {
    const { id } = req.params

    res.userId

    if(!req.userId) return res.JSON({message: 'Unauthenticated'})

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No category with id: ${id}`)
    
    const category = await Category.findById(id)

    if(category.categoryStatus === 'active'){
        category.categoryStatus = 'inactive'
    } else{
        category.categoryStatus = 'active'
    }

    const updatedCategory = await Category.findByIdAndUpdate(id, category, { new: true })
    
    res.json(updatedCategory)
}

export default router