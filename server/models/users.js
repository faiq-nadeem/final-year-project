import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name        : {type: String, required:true},
    email       : {type: String, required:true},
    password    : {type: String, required:true},
    dob         : {type: String, required:true},
    gender      : {type: String, required:true},
    credits     : {type: String, required:true},
    userRole    : {type: String, required:true},
    userStatus  : {type: String, required:true},
    selectedFile: {type: String, required:true},
    id          : {type: String}
})

export default mongoose.model("User", userSchema)