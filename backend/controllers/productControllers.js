import Product from '../model/Product.js';

export const getProducts = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const sortField = req.query.sort || '-createdAt';
    const keyword = req.query.keyword || '';

    const query = {
      $or: [
        { name: { $regex: keyword, $options: 'i' } },
        { description: { $regex: keyword, $options: 'i' } }
      ]
    };

    const total = await Product.countDocuments(query);

    const products = await Product.find(query)
      .sort(sortField)
      .skip((page - 1) * limit)
      .limit(limit);

    res.json({
      products,
      page,
      totalPages: Math.ceil(total / limit),
      totalProducts: total
    });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};

export const addProduct = async (req, res) => {
  try {
    const { name, description, price, imageUrl } = req.body;

    if (!name || !description || !price || !imageUrl) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const product = new Product({ name, description, price, imageUrl });
    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Failed to add product', error: err.message });
  }
};

export const updateProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, price, imageUrl } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      id,
      { name, description, price, imageUrl },
      { new: true, runValidators: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update product', error: err.message });
  }
};

export const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Product.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted', product: deletedProduct });
  } catch (err) {
    res.status(500).json({ message: 'Failed to delete product', error: err.message });
  }
};
