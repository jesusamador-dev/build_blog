const express = require('express');
const app = express();

const { config } = require('./config/index')
const webHooks = require('./routes/webhooks');

webHooks(app);

app.listen(config.port, () => {
    console.log(`http://localhost:${config.port}`)
});