const express = require('express');
const app = express();
const dotenv = require('dotenv');
const emailRoutes = require('./routes/emailRoutes');
const cors = require('cors');

// Configuración de variables de entorno
dotenv.config();

// Middleware para el manejo de datos JSON
app.use(express.json());

// Configurar CORS
app.use(cors());
app.options('*', cors());

// Configuración adicional para el manejo de CORS
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
});

// Rutas del API de correo electrónico
app.use('/api/email', emailRoutes);

// Puerto del servidor
const port = process.env.PORT || 5001;

// Inicio del servidor
app.listen(port, () => {
    console.log(`Servidor escuchando en el puerto ${port}`);
});