const Deguide = require('../models/deguide.model.js');

// Create and Save a new Daerah
exports.create = (req, res) => {
    // Validate request
    if(!req.body.idDaerah) {
        return res.status(400).send({
            message: "idDaerah can not be empty"
        });
    }

    // Create a Daerah
    const daerah = new Daerah({
        idDaerah: req.body.idDaerah, 
        idTempat: req.body.idTempat,
        urlImg: req.body.urlImg
    });

    // Save Daerah in the database
    daerah.save()
    .then(data => {
        res.send(data);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while creating the Daerah."
        });
    });
};


// Retrieve and return all daerahs from the database.
exports.findDaerah = (req, res) => {
    Deguide.find({'idDaerah' : req.params.daerahId})
    .then(daerahs => {
        res.send(daerahs);
    }).catch(err => {
        res.status(500).send({
            message: err.message || "Some error occurred while retrieving Daerah."
        });
    });
};

// Find a single daerah with a daerahId
exports.findOne = (req, res) => {
    Deguide.findById(req.params.daerahId)
    .then(daerah => {
        if(!daerah) {
            return res.status(404).send({
                message: "Daerah not found with id " + req.params.daerahId
            });            
        }
        res.send(daerah);
    }).catch(err => {
        if(err.kind === 'ObjectId') {
            return res.status(404).send({
                message: "Daerah not found with id " + req.params.daerahId
            });                
        }
        return res.status(500).send({
            message: "Error retrieving daerah with id " + req.params.daerahId
        });
    });
};
