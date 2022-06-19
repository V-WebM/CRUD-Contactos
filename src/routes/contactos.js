const express = require('express');
const router = express.Router();

const contactosController = require('../controllers/contactosController');

router.get('/', contactosController.list);
router.post('/agregar', contactosController.save);
router.get('/delete/:id', contactosController.delete);
router.get('/update/:id', contactosController.edit);
router.post('/update/:id',contactosController.update);

module.exports = router;