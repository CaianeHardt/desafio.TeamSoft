const address = require('./addressRoute')
const customers = require('./customersRoute')
const bodyParser = require('body-parser')
const cors = require('cors')

module.exports = app => {
    app.use(cors({origin: '*'}));
    app.use(bodyParser.json())
    app.use(
        address,
        customers
        )
}
