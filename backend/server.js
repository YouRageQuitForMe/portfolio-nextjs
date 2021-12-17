require('dotenv').config({ path: __dirname + '/../.env' })

const Express = require("express");
const app = Express();

const bodyParser = require("body-parser");
const router = require('./routes/routes');
const db = require('./config/dbConnection');
const Project = require('./models/Project')

const port = process.env.PORT;

db(); //db connection function

app.use(bodyParser.json())

app.use('/api/rage', require('./routes/routes'));

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})