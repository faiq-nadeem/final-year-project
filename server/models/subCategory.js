import mongoose from 'mongoose'

const subCategorySchema = mongoose.Schema({
    title       : String,
    message     : String,
    name        : String,
    creator     : String,
    tags        : [String],
    selectedFile: String,
    categoryId  : String,
    createdAt   : {
        type   : Date,
        default: new Date(),
    },
})

var SubCategory = mongoose.model('SubCategory', subCategorySchema)

export default SubCategory