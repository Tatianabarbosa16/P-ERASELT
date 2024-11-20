const mongoose = require('mongoose');

const accountSchema = new mongoose.Schema({
    platformName: { type: String, required: true },
    profileUrl: { type: String, required: true },
    infoType: { type: String, required: true },
});

module.exports = mongoose.model('Account', accountSchema);
