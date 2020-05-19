const express = require('express');
const router = express.Router();
const { EncountersController } = require('../controller');
//const EncountersController = require('../controller/EncountersController');
// middleware that is specific to this router
// router.use( (req, res, next) => {
//   console.log('Time: ', Date.now());
//   next();
// });

// CREATE
router.post('/encounters', EncountersController.create);

// GET (ALL)
router.get('/encounters', EncountersController.find);

// GET (ONE)
router.get('/encounters/:id', EncountersController.findById);

// UPDATE
router.patch('/encounters/:id', EncountersController.findByIdAndUpdate);

// DELETE
router.delete('/encounters/:id', EncountersController.findByIdAndDelete);

module.exports = router;