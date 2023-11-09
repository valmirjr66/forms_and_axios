import products from "../models/Product.js";

class ProductController {
  static getAll = async (req, res) => {
    try {
      const { page, pageSize } = req.query;
      const skipDocuments = page * pageSize;

      const productsResut = await products
        .find()
        .skip(skipDocuments)
        .limit(pageSize)
        .exec();

      const count = await products.count();

      res
        .status(200)
        .json({
          items: productsResut,
          currentPage: parseInt(page),
          totalPages: Math.ceil(count / pageSize),
          totalItems: count,
        });
    } catch (error) {
      res.status(500).json(error);
    }
  };

  static getById = async (req, res) => {
    try {
      const id = req.params.id;
      const selectedProduct = await products.findById(id);
      res.status(200).send(selectedProduct);
    } catch (error) {
      res.status(400).send({ message: `${error.message} - id not found` });
    }
  };

  static create = async (req, res) => {
    try {
      let product = new products(req.body);
      await product.save();
      res.status(201).send(product.toJSON());
    } catch (error) {
      res
        .status(500)
        .send({ message: `${error.message} - Unable to create product` });
    }
  };

  static update = async (req, res) => {
    try {
      const id = req.params.id;
      await products.findByIdAndUpdate(id, { $set: req.body });
      res.status(200).send({ message: "Product updated successfully" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };

  static delete = async (req, res) => {
    try {
      const id = req.params.id;
      await products.findByIdAndDelete(id);
      res.status(200).send({ message: "Product deleted successfully" });
    } catch (error) {
      res.status(500).send({ message: error.message });
    }
  };
}

export default ProductController;
