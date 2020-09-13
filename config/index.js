require('dotenv').config()

const config = {
    dev: process.env.NODE_ENV !== 'production',
    port: process.env.PORT || 3000,
    travisId: 'ymIPyY_Ibwks_aL2P0BEJg'
}

module.exports = { config }