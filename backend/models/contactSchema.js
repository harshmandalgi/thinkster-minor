const mongoose = require('mongoose');

const contactSchema = mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: false
    },
    url: {
        type: String,
        required: true
    }
});

const contact = module.exports = mongoose.model('contact', contactSchema);
