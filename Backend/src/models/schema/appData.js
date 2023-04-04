const mongoose = require('mongoose');

const appDataSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    clientAppId: {
        type: String,
        required: true,
    },
    clientAppSecret: {
        type: String,
        required: true,
    },
    redirectUri: {
        type: String,
        required: true,
    },
    scopes: [{
        type: String,
        enum: ["NAME","EMAIL"],
        required: true,
    }]
}, { timestamps: true });

module.exports = mongoose.model('AppData', appDataSchema);