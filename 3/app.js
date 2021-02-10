const express = require('express');
const app = express();
const user = require('./routers/user');


app.use('/', user)




app.listen(5000, () => {
    console.log("server started on port 5000 !!");
});