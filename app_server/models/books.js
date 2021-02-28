const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    booktitle: {
        type: String,
        required: true,
        minlength: 4
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    dateofpublish: {
        type: Date,
        required: true
    }
});

const reviewSchema = new mongoose.Schema({
    reviewer: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        required: true,
        min: 0,
        max: 5
    },
    reviewText: String,
    createdOn: {
        type: Date,
        'default': Date.now
    }
});

mongoose.model('Book', bookSchema);