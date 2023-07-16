require('dotenv').config();

const emailConfig = {
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    user: process.env.SMTP_USER,
    password: process.env.SMTP_PASSWORD,
    adminEmail: process.env.ADMIN_EMAIL,
};

module.exports = emailConfig;