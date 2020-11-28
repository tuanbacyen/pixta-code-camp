
const express = require('express');
const apiController = require('../controllers/apiController')
var router = express.Router();

router.post('/api/input', apiController.api_input);
router.get('/api/list_kids', apiController.api_list_kids);
router.get('/api/list_gifts', apiController.api_list_gifts);
router.get('/test', apiController.test);
router.get('/select_test', apiController.select_test);

module.exports = router;
