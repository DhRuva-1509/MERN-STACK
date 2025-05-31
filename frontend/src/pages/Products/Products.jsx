import React from "react";
import Header from "../../components/Header";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import EmptyList from "../../components/EmptyList";
import AddProducts from "./AddProducts";

const Products = () => {
    const [sampleProducts, setSampleProducts] = React.useState([]); 

    const handleAddProducts = (newProduct) => {
        const productId = {...newProduct, id: Date.now().toString()}

        setSampleProducts((prevProducts)=>[...prevProducts, productId])
    }
    return(
        <>
            <section>
                <Header></Header>
                <Container>
                    <Row lg={12} className="justify-content-end" style={{marginBottom: 16}}>
                        <Col xs="auto" style={{marginTop:16}}>
                            {/* <Button variant="primary">  <i class="bi bi-plus-circle" style={{marginRight:"8px"}}></i>Add Product</Button> */}
                            <AddProducts onAddProduct = {handleAddProducts}/>
                        </Col>
                    </Row>

                    <Row>
                        {
                            sampleProducts.length == 0 ?
                            <EmptyList message={"We're are currently out of stock"}/>
                            : 
                            sampleProducts.map(products =>(
                                <Col key={products.id} xs={12} md={6} lg={4} style={{ marginBottom : '20px'}}>
                                    <Card style={{ width: '18rem' }}>
                                        <Card.Img variant="top" style={{height: "200px", objectFit: "cover"}} src={products.imageUrl} alt="loading"/>
                                        <Card.Body>
                                            <Card.Title>{products.name}</Card.Title>
                                            <Card.Text>
                                            {products.description}
                                            </Card.Text>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <p style={{color:"#165691", fontWeight:'bold',fontSize: "13px"}}>${products.price}</p>

                                                <div>
                                                    <i className="bi bi-pencil-square" style={{cursor:'pointer', marginRight: 10, color: "#258028" }}></i>
                                                    <i className="bi bi-trash3" style={{cursor:'pointer', color: 'red'}}></i>
                                                </div>

                                            </div>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            ))
                    }
                    </Row>
                </Container>
            </section>
        </>
    )
}

export default Products;
