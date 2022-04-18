const express = require("express");
const app = express();
const connection = require("./model/connection");
const routes = require("./routes");

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.set("view engine", "ejs");
app.use("/", routes);

const port = 8000;
app.listen(port, () => {
    console.log(`Running at port: `, port);
});