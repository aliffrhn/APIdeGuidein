const mongoose = require('mongoose');

const daerah = mongoose.Schema({
    idDaerah: Number,
    idTempat: Number,   
    tempat : String,
    urlImg : String,
}, {
    timestamps: true
});

module.exports = mongoose.model('Daerah', daerah);
