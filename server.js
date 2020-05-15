const express = require('express')
const bodyParser = require('body-parser')
const todos = require('./routes/todoRoutes')
const app = express()

app.use("/api", todos)

const port = 3000;
app.listen(port, () =>
    console.log('Localhost udah jalan di port ${port}'))