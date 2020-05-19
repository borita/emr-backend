const express = require('express');
const router = express.Router();

router.use(require('./AuthRoutes'));
router.use(require('./EncountersRoutes'));

module.exports = router;