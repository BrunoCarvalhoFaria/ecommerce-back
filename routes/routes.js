const routes = require("express").Router();
const ProdutoController = require("../controller/ProdutoController");
const CarrinhoController = require("../controller/CarrinhoController");

routes.get("/produtos", ProdutoController.getAllProducts);
routes.get("/produtos/:categoria", ProdutoController.getAllProducts);
routes.post("/produtos", ProdutoController.createProduct);
routes.put("/produtos/:id", ProdutoController.getAllProducts);
routes.delete("/produtos/:id", ProdutoController.getAllProducts);

routes.get("/carrinho", CarrinhoController.getAllTasks);
routes.put("/carrinho/produto/:id", CarrinhoController.getAllTasks);
routes.delete("/carrinho/produto/:id", CarrinhoController.getAllTasks);

module.exports = routes;
