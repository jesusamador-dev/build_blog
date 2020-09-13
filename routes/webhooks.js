const express = require('express');

const webHooks = (app) => {
    const router = express.Router();
    app.user('/api/webhook', router);

    router.post('/published', (req, res) => {

    })
}

module.exports = webHooks;