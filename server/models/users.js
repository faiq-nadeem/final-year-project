import mongoose from "mongoose"

const userSchema = mongoose.Schema({
    name        : {type: String, required:true},
    email       : {type: String, required:true},
    password    : {type: String, required:true},
    message     : {type: String},
    country     : {type: String},
    city        : {type: String},
    dob         : {type: String, required:true},
    occupation  : {type: String},
    gender      : {type: String, required:true},
    birthplace  : {type: String},
    credits     : {type: String, required:true},
    userRole    : {type: String, required:true},
    userStatus  : {type: String, required:true},
    selectedFile: {type: String, required:true},
    userKey     : {type: String},
    id          : {type: String}
})

export default mongoose.model("User", userSchema)