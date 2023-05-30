const express = require('express');
const router = express.Router();

const siteController = require('../app/controllers/SiteController.js');

router.use('/search', siteController.search);

router.use('/home', siteController.home);

router.use('/', siteController.index);

module.exports = router;