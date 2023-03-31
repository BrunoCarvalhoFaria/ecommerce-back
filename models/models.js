const mongoose = require("mongoose");

const produtoSchema = new mongoose.Schema({
  id: {
    type: Number,
    require: true,
  },
  nome: {
    type: String,
    require: true,
  },
  categoria: {
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
    { id: { type: Number, require: true } },
    { quantidade: { type: Number, require: true } },
    { nome: { type: String, require: true } },
    { preco: { type: Number, require: true } },
  ],
  total: {
    type: Number,
    require: true,
  },
});

const Produto = mongoose.model("produto", produtoSchema);
const Carrinho = mongoose.model("carrinho", carrinhoSchema);

module.exports = {
  Produto: Produto,
  Carrinho: Carrinho,
};
