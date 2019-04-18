const mongoose = require('mongoose');

const contactSchema1 = mongoose.Schema({
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

const contact1 = module.exports = mongoose.model('contact1', contactSchema1);
