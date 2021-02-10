const express = require("express");
let user = express.Router();
const fs = require("fs");

user.use(
    express.urlencoded({
        extended: true,
    })
);

function checkUser(user) {
    let users = JSON.parse(fs.readFileSync("./public/files/user.json", "utf8"));

    for (const key in users) {
        if (users[key].username === user) {
            return users[key];
        }
    }
    return false;
}

user.post("/getUser", (req, res) => {
    let username = req.body.username;

    let temp = JSON.parse(JSON.stringify(username));

    user = checkUser(temp);
    console.log(user);

    if (user !== false) {
        console.log("Not False");
        console.log(user);
        res.status(200).send(user);
    } else {
        console.log("false");
        res.status(404).send("404: Not Found");
    }
});

module.exports = user;