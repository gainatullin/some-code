const mongoose = require('mongoose');

const Post = new mongoose.Schema({
    author: {
        type: String
    },
    title: {
        type: String
    },
    content: {
        type: String
    },
    picture: {type: String}
})

module.exports = mongoose.model('Post', Post)