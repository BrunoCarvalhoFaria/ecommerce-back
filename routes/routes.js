const routes = require("express").Router();
const ProdutoController = require("../controller/ProdutoController");
const CarrinhoController = require("../controller/CarrinhoController");

routes.get("/produtos", ProdutoController.getAllProducts);
routes.get("/produtos/filtrar", ProdutoController.getFilteredProducts);

routes.post("/produtos", ProdutoController.createProduct);
routes.put("/produtos/:id", ProdutoController.putProduct);
routes.delete("/produtos/:id", ProdutoController.deleteProduct);

routes.get("/carrinho", CarrinhoController.getCart);
routes.post("/carrinho", CarrinhoController.postCart);
routes.put("/carrinho/produto/:id", CarrinhoController.putProductCart);
routes.delete("/carrinho/produto/:id", CarrinhoController.deleteProductCart);

module.exports = routes;
