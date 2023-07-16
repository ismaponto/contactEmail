const express = require('express');
const router = express.Router();
const emailController = require('./controlers/emailControllers');

// Ruta para enviar el correo electrónico de contacto
router.post('/contact', emailController.sendEmail);
router.get('/contact', (req, res) => {
    res.send('isma es un capo');
});
module.exports = router;