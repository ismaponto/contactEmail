const nodemailer = require('nodemailer');
require('dotenv').config();


const sendEmail = async(req, res) => {
    try {
        const { name, email, message } = req.body;


        // Configuración del transporte de correo
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: true, // true para usar SSL/TLS
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });


        // Configuración del correo electrónico
        const mailOptions = {
            from: email,
            to: process.env.ADMIN_EMAIL,
            subject: 'Nuevo mensaje de formulario de contacto',
            text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
        };

        // Enviar el correo electrónico
        await transporter.sendMail(mailOptions);

        res.status(200).json({ message: 'El mensaje de contacto se envió correctamente.' });
    } catch (error) {
        console.error('Error al enviar el correo electrónico:', error);
        res.status(500).json({ message: 'Ocurrió un error al enviar el correo electrónico.' });
    }
};

module.exports = { sendEmail };