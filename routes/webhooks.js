const express = require('express');
const cors = require('cors');
const axios = require('axios');
const corsOptions = { origin: "http://admin.jesusamador.com" };

const webHooks = (app) => {
    const router = express.Router();
    app.use(cors(corsOptions));
    app.use('/api/webhooks', router);

    router.post('/published', (req, res) => {
        res.status(200).json({
            "message": "success"
        })
    })

    router.get('/published', (req, res) => {
        res.send('Servidor funcionando');
    })
}

module.exports = webHooks;