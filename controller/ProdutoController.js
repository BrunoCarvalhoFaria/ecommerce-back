const { Produto } = require("../models/models");

const getAllProducts = async (req, res) => {
  try {
    const productsList = await Produto.find().sort("nome");
    return res.send(productsList);
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

const createProduct = async (req, res) => {
  const product = req.body;
  if (!product.name) {
    return res.redirect("/");
  }

  try {
    await Produto.create(product);
    return res.redirect("/");
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

// const getById = async (req, res) => {
//   try {
//     const task = await Task.findOne({ _id: req.params.id });
//     const tasksList = await Task.find();

//     res.status(200).send({ task, tasksList });
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// };

// const updateTask = async (req, res) => {
//   try {
//     const task = req.body;
//     await Task.updateOne({ _id: req.params.id }, task);
//     res.redirect("/");
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// };

// const deleteTask = async (req, res) => {
//   try {
//     await Task.findOneAndDelete({ _id: req.params.id });
//     res.redirect("/");
//   } catch (err) {
//     res.status(500).send({ error: err.message });
//   }
// };

module.exports = {
  getAllProducts,
  createProduct,
  // createTask,
  // getById,
  // updateTask,
  // deleteTask,
};
