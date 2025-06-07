let products = [];  // In-memory store

// Get all products
export const getProducts = (req, res) => {
  res.json(products);
};

// Add a product
export const addProduct = (req, res) => {
  const { name, description, price, imageUrl } = req.body;

  if (!name || !description || !price || !imageUrl) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const newProduct = {
    id: Date.now().toString(),
    name,
    description,
    price,
    imageUrl
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
};

// Update a product
export const updateProduct = (req, res) => {
  const { id } = req.params;
  const { name, description, price, imageUrl } = req.body;

  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  products[productIndex] = {
    ...products[productIndex],
    name,
    description,
    price,
    imageUrl
  };

  res.json(products[productIndex]);
};

// Delete a product
export const deleteProduct = (req, res) => {
  const { id } = req.params;

  const productIndex = products.findIndex((p) => p.id === id);
  if (productIndex === -1) {
    return res.status(404).json({ message: 'Product not found' });
  }

  const deletedProduct = products.splice(productIndex, 1);
  res.json({ message: 'Product deleted', product: deletedProduct[0] });
};