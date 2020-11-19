const express = require("express");
const morgan = require("morgan");
const routes = require("./routes");

const app = express();

app.set("view engine", "pug");

app.use(morgan('dev'));
app.use(routes);

const port = 8080;

app.listen(port, () => console.log(`Listening on port ${port}...`));
// Define a port and start listening for connections.

module.exports = app;
