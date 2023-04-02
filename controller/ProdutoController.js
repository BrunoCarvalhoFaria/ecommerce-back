const { Produto } = require("../models/models");

const getAllProducts = async (req, res) => {
  try {
    const productsList = await Produto.find().sort("nome");
    return res.status(200).send(productsList);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const createProduct = async (req, res) => {
  const product = req.body;

  try {
    await Produto.create(product);
    return res
      .status(200)
      .send({ success: true, message: "Produto salvo com sucesso!" });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

const getFilteredProducts = async (req, res) => {
  if (req.query.ordenar.includes("preço")) {
    if (req.query.ordenar.includes("Maior")) {
      sort = {
        preco: -1,
      };
    } else {
      sort = {
        preco: 1,
      };
    }
  } else {
    sort = {
      nome: 1,
    };
  }
  if (req.query.categoria.includes("Selecione")) {
    try {
      const productsList = await Produto.find().sort(sort);
      res.status(200).send(productsList);
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
    return;
  }
  try {
    const productsList = await Produto.find({
      categoria: req.query.categoria,
    }).sort(sort);

    res.status(200).send(productsList);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const putProduct = async (req, res) => {
  try {
    const product = req.body;
    await Produto.updateOne({ _id: req.params.id }, product);
    return res
      .status(200)
      .send({ success: true, message: "Produto editado com sucesso!" });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

const deleteProduct = async (req, res) => {
  try {
    await Produto.findOneAndDelete({ _id: req.params.id });
    return res
      .status(200)
      .send({ success: true, message: "Produto excluído com sucesso!" });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

module.exports = {
  getAllProducts,
  createProduct,
  getFilteredProducts,
  putProduct,
  deleteProduct,
};
