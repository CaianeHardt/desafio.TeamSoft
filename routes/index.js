const clientes = require('./clientesRoute')
const enderecos = require('./enderecosRoute')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(cors({origin: '*'}));
    app.use(bodyParser.json())
    app.use(
        clientes,
        enderecos
        )
}
