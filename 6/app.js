const express = require('express')
const app = express()
const a = require('./routes/pages')


app.use('/', a)

app.listen(5000, () => {
    console.log("server running on port 5000");
})