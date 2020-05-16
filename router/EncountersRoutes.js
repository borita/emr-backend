const express = require('express');
const router = express.Router();
const EncountersController = require('../controller/EncountersController');
// middleware that is specific to this router
// router.use( (req, res, next) => {
//   console.log('Time: ', Date.now());
//   next();
// });

// CREATE
router.post('/Encounters', EncountersController.create);

// GET (ALL)
router.get('/Encounters', EncountersController.find);

// GET (ONE)
router.get('/Encounters/:id', EncountersController.findById);

// UPDATE
router.patch('/Encounters/:id', EncountersController.findByIdAndUpdate);

// DELETE
router.delete('/Encounters/:id', EncountersController.findByIdAndDelete);

module.exports = router;