const { Carrinho } = require("../models/models");

const getCart = async (req, res) => {
  try {
    const cart = await Carrinho.find();
    return res.status(200).send(cart);
  } catch (err) {
    res.status(500).send(err.message);
  }
};

const postCart = async (req, res) => {
  const cart = req.body;

  try {
    await Carrinho.create(cart);
    return res
      .status(200)
      .send({ success: true, message: "Produto salvo com sucesso!" });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

const putProductCart = async (req, res) => {
  let product = req.body;
  product.total = 0;

  product.items.map((item) => {
    product.total += Number(item.preco) * Number(item.quantidade);
  });
  console.log(product);
  try {
    await Carrinho.updateOne({ _id: req.params.id }, product);
    return res.status(200).send({ success: true });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

const deleteProductCart = async (req, res) => {
  try {
    let cart = await Carrinho.find();
    cart = cart[0];
    let index = cart.items.findIndex(
      (item) => item.productId === req.params.id
    );
    console.log(req.params.id);
    if (index === -1) {
      throw "elemento nao encontrado";
    }

    cart.items.splice(index, 1);
    console.log(cart);

    await Carrinho.updateOne({ _id: cart._id }, cart);
    return res.status(200).send({ success: true });
  } catch (err) {
    res.status(500).send({ success: false, error: err.message });
  }
};

module.exports = {
  getCart,
  putProductCart,
  deleteProductCart,
  postCart,
};
