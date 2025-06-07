import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Header from "../../components/Header";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from "react-bootstrap/Card";
import EmptyList from "../../components/EmptyList";
import ProductModal from "./ProductModal";
import {fetchProducts,addProduct,editProduct,deleteProduct} from "../../reducer/actions/productActions";

const Products = () => {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.productState);
  const productsArray = Array.isArray(products) ? products : [];
  const [showModal, setShowModal] = useState(false);
  const [productToEdit, setProductToEdit] = useState(null);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const handleSubmitProduct = (product) => {
    if (product.id) {
      dispatch(editProduct(product));
    } else {
      dispatch(addProduct(product));
    }
    setShowModal(false);
  };

  const handleAddClick = () => {
    setProductToEdit(null);
    setShowModal(true);
  };

  const handleEditClick = (product) => {
    setProductToEdit(product);
    setShowModal(true);
  };

  const handleDeleteClick = (productId) => {
    dispatch(deleteProduct(productId));
  };

  return (
    <>
      <section>
        <Header />
        <Container>
          <Row lg={12} className="justify-content-end" style={{ marginBottom: 16 }}>
            <Col xs="auto" style={{ marginTop: 16 }}>
              <Button variant="primary" onClick={handleAddClick}>
                <i className="bi bi-plus-circle" style={{ marginRight: "8px" }}></i>
                Add Product
              </Button>
            </Col>
          </Row>

          <Row>
          {productsArray.length === 0 ? (
             <EmptyList message={"We're currently out of stock"} />
            ) : (
              products.map((product) => (
                <Col key={product.id} xs={12} md={6} lg={4} style={{ marginBottom: "20px" }}>
                  <Card style={{ width: "18rem" }}>
                    <Card.Img
                      variant="top"
                      style={{ height: "200px", objectFit: "cover" }}
                      src={product.imageUrl}
                      alt="Product"
                    />
                    <Card.Body>
                      <Card.Title>{product.name}</Card.Title>
                      <Card.Text>{product.description}</Card.Text>

                      <div className="d-flex justify-content-between align-items-center">
                        <p
                          style={{
                            color: "#165691",
                            fontWeight: "bold",
                            fontSize: "13px"
                          }}
                        >
                          ${product.price}
                        </p>

                        <div>
                          <i
                            className="bi bi-pencil-square"
                            style={{
                              cursor: "pointer",
                              marginRight: 10,
                              color: "#258028"
                            }}
                            onClick={() => handleEditClick(product)}
                          ></i>
                          <i
                            className="bi bi-trash3"
                            style={{ cursor: "pointer", color: "red" }}
                            onClick={() => handleDeleteClick(product.id)}
                          ></i>
                        </div>
                      </div>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            )}
          </Row>
        </Container>

        <ProductModal
          show={showModal}
          onClose={() => setShowModal(false)}
          onSubmitProduct={handleSubmitProduct}
          productToEdit={productToEdit}
        />
      </section>
    </>
  );
};

export default Products;
