const express = require('express');
const bodyParser = require('body-parser');
const { config } = require('../config/index');
const cors = require('cors');
const axios = require('axios');
const corsOptions = { origin: "https://admin.jesusamador.com" };

const webHooks = (app) => {
    const router = express.Router();
    app.use(cors(corsOptions));
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use('/api/webhooks', router);
    const apiTravis = axios.create({
        baseURL: ' https://api.travis-ci.com/repo/jesusamador-dev%2Famador_gatsby/requests',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Travis-API-Version': '3',
            'Authorization': `token ${config.travisId}`
        }
    });
    const body = {
        "request": {
            "branch": "master",
            "message": "Actualizando posts"
        }
    }
    router.post('/published', async(req, res, next) => {
        try {
            const request = await apiTravis('/', {
                data: body
            });

            res.status(200).json({
                message: "success"
            })
        } catch (e) {
            next(e)
        }
    })

    router.get('/published', (req, res) => {
        res.send('Servidor funcionando');
    })
}

module.exports = webHooks;