const mongoose = require("mongoose");
const config = require('../config/config');

const db = config.mongoURL; // Address of Website

mongoose.connect(db);
console.log('CONNECTED TO MONGODB');

//  CREATING SCHEMA

const contestSchema = new mongoose.Schema({
    name: String,
    start_date: Date,
    end_date: Date,
    prize: Number,
    type: String,
    organised_by: mongoose.Schema.Types.ObjectId,
    posts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'post'
    }],
    description: String,
    status: Boolean,
    imageUrl: String,
    juries: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'jury'
    }],
})


//  ADD PLUGINS FOR PASSPORT HERE!!

//  EXPORTING MODEL
module.exports = mongoose.model("Contest", contestSchema);