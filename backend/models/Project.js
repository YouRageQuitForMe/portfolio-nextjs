const { Schema } = require('mongoose');
const mongoose = require('mongoose');

const ProjectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, "Please provide a valid title"],
        unique: true
    },
    description: {
        type: String,
        required: [true, "Please provide an email"],
    },
    thumbnail: {
        type: String, 
        required: [true, "Please provide a thumbnail"],
    }
})

const Project = mongoose.model("Project", ProjectSchema);

module.exports = Project;

