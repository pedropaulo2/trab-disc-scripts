const express = require('express');
const router = express.Router();

const basic = require('./controllers/BasicController.js');

router.get('/', basic.home);

router.post('/lance', basic.lance);

router.get('/products', basic.products);
router.get('/leilaoAtivo', basic.leilaoAtivo);

router.post('/admin', basic.admin);

router.post('/status', basic.status);

module.exports = router;
