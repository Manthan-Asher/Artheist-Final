const mongoose = require("mongoose");
const config = require('../config/config');

const db = config.mongoURL; // Address of Website

mongoose.connect(db);
console.log('CONNECTED TO MONGODB');

//  CREATING SCHEMA

const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    about: String,
    social_media_handle: String,
    contests: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'contest'
    }],
    image_link: String,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }],
    mobile_number: Number,
    type: String,
})


//  ADD PLUGINS FOR PASSPORT HERE!!

//  EXPORTING MODEL
module.exports = mongoose.model("User", userSchema);