module.exports = (app) => {
    const deguide = require('../controllers/deguide.controller.js');

    // Retrieve all Daerah where daerahId
    app.get('/deguide/1/:daerahId', deguide.findDaerah);

    // Create a new Daerah
    app.post('/deguide', deguide.create);
}