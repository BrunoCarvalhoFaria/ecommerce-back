const swaggerAutogen = require("swagger-autogen")();

swaggerAutogen("./swagger-output.json", ["./routes/routes.js"]);
