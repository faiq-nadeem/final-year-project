import mongoose from 'mongoose'

const subCategorySchema = mongoose.Schema({
    title            : String,
    message          : String,
    name             : String,
    creator          : String,
    tags             : [String],
    categoryId       : String,
    subCategoryStatus: {type: String, required:true},
    createdAt        : {
        type   : Date,
        default: new Date(),
    },
    selectedFile: String,
})

var SubCategory = mongoose.model('SubCategory', subCategorySchema)

export default SubCategory