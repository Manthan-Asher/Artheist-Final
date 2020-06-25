const mongoose = require("mongoose");
const config = require('../config/config');

const db = config.mongoURL; // Address of Website

mongoose.connect(db);
console.log('CONNECTED TO MONGODB');

//  CREATING SCHEMA

const postSchema = new mongoose.Schema({
    name: String,
    participant: mongoose.Schema.Types.ObjectId,
    likes: Number,
    contest: mongoose.Schema.Types.ObjectId,
    videoUrl: String,
    type: String,
    ranking: Number,
    report: Number,
    jury_score: Number,
})


//  ADD PLUGINS FOR PASSPORT HERE!!

//  EXPORTING MODEL
module.exports = mongoose.model("Post", postSchema);