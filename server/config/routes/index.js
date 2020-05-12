const express = require('express');

const { welcome } = require('../../modules');

const router = express.Router();

router.get('/welcome', welcome.index);

module.exports = router;
