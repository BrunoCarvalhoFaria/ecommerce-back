require("dotenv").config();
const express = require("express");
const path = require("path");
const routes = require("./routes/routes");
const connectToDb = require("./database/db");
const swaggerUI = require("swagger-ui-express");
const swaggerDocs = require("./swagger-output.json");
const cors = require("cors");
//const bodyParser = require('body-parser');

connectToDb();
const app = express();
const port = process.env.PORT || 5000;

var allowCrossDomain = function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
};
app.use(express.json());
app.use(cors());

app.use(express.urlencoded());

app.use(routes);
app.use("/docs", swaggerUI.serve, swaggerUI.setup(swaggerDocs));

app.listen(port, () => {
  console.log(`Servidor Iniciado em http://localhost:${port}`);
});
