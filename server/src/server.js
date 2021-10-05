const express = require("express");
require("dotenv").config()

const connect = require("./config/db");

const app = express();
app.use(express.json());
const port = process.env.PORT || 1234;

const commitController = require("./controllers/commit.controller")


app.use("/commits", commitController)

const start = async () => {
    await connect();

    app.listen(port, () => {
        console.log(`Listening on port ${port}...`)
    })
}


module.exports = start;