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

    router.post('/published', async(req, res, next) => {
        try {
            const instance = axios.create({
                method: 'post',
                baseURL: 'https://api.travis-ci.com/repo/jesusamador-dev%2Famador_gatsby',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'Travis-API-Version': '3',
                    'Authorization': `token ${config.travisId}`
                },
                body: {
                    request: {
                        branch: "master",
                        message: "Actualizando posts"
                    }
                }
            });

            const request = await instance.post('/requests');
            // console.log(request)
            const requestJson = request.data;
            res.status(200).json({
                message: "success",
                data: requestJson
            })
        } catch (e) {
            next(e)
        }
    })

    router.get('/published', (req, res) => {
        console.log(req)
        res.json(JSON.stringify(req));
    })
}

module.exports = webHooks;