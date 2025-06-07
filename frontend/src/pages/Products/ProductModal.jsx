import { Button, Form } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import ModalComponent from "../../components/ModalComponent";

const ProductModal = ({ show, onClose, onSubmitProduct, productToEdit }) => {
  const [newErrors, setNewErrors] = useState({});
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: "",
    imageUrl: ""
  });

  useEffect(() => {
    if (productToEdit) {
      setFormData({
        name: productToEdit.name || "",
        description: productToEdit.description || "",
        price: productToEdit.price || "",
        imageUrl: productToEdit.imageUrl || ""
      });
    } else {
      setFormData({
        name: "",
        description: "",
        price: "",
        imageUrl: ""
      });
    }
    setNewErrors({});
  }, [productToEdit, show]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};

    if (!formData.name.trim()) {
      errors.name = "Name is required";
    }

    if (!formData.description.trim()) {
      errors.description = "Description is required";
    }

    if (!formData.price.trim()) {
      errors.price = "Price is required";
    }

    if (!formData.imageUrl.trim()) {
      errors.imageUrl = "Image URL is required";
    }

    if (Object.keys(errors).length > 0) {
      setNewErrors(errors);
    } else {
      const productData = { ...formData };

      // Only set id if editing
      if (productToEdit) {
        productData.id = productToEdit.id;
      }

      onSubmitProduct(productData);
      onClose();
    }
  };

  return (
    <ModalComponent
      show={show}
      onClose={onClose}
      onSubmit={handleSubmit}
      title={productToEdit ? "Edit Product" : "Add a New Product"}
      submitTitle={productToEdit ? "Update Product" : "Add Product"}
    >
      <Form>
        <Form.Group className="mb-3">
          <Form.Label>Product Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            isInvalid={!!newErrors.name}
          />
          <Form.Control.Feedback type="invalid">{newErrors.name}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Description</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            placeholder="Enter the product description"
            value={formData.description}
            onChange={(e) => setFormData({ ...formData, description: e.target.value })}
            isInvalid={!!newErrors.description}
          />
          <Form.Control.Feedback type="invalid">{newErrors.description}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Price</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product price"
            value={formData.price}
            onChange={(e) => setFormData({ ...formData, price: e.target.value })}
            isInvalid={!!newErrors.price}
          />
          <Form.Control.Feedback type="invalid">{newErrors.price}</Form.Control.Feedback>
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Product Image URL</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter the product image URL"
            value={formData.imageUrl}
            onChange={(e) => setFormData({ ...formData, imageUrl: e.target.value })}
            isInvalid={!!newErrors.imageUrl}
          />
          <Form.Control.Feedback type="invalid">{newErrors.imageUrl}</Form.Control.Feedback>
        </Form.Group>
      </Form>
    </ModalComponent>
  );
};

export default ProductModal;
