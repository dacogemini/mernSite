const express = require('express');
const router = express.Router();

// @route GET api/profile/test
// @description Tests profile route
// @access Public
router.get('/test', (req, res) => res.json({ message: "Profile Successful" }));

module.exports = router;