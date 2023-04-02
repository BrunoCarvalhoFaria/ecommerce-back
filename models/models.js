const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  nome: {
    type: String,
    require: true,
  },
  categoria: {
    type: String,
    require: true,
  },
  fabricante: {
    type: String,
    require: true,
  },
  preco: {
    type: Number,
    require: true,
  },
  descricao: {
    type: String,
    require: true,
  },
  codigoBarras: {
    type: String,
    require: true,
  },
  imagem: {
    type: String,
    require: true,
  },
});

const carrinhoSchema = new mongoose.Schema({
  items: [
    {
      productId: String,
      quantidade: Number,
      nome: String,
      preco: Number,
      precoTotalItem: Number,
    },
  ],
  total: Number,
});

const Produto = mongoose.model("Produto", produtoSchema);
const Carrinho = mongoose.model("Carrinho", carrinhoSchema);

module.exports = {
  Produto: Produto,
  Carrinho: Carrinho,
};
