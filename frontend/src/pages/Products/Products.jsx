import React from "react";
import Header from "../../components/Header";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Button from "react-bootstrap/esm/Button";
import Card from 'react-bootstrap/Card';
import EmptyList from "../../components/EmptyList";

const Products = () => {
    const sampleProducts = [
        {
            id: "1",
            image: "https://i0.wp.com/www.ear-fidelity.com/wp-content/uploads/2022/10/P1054788s-scaled.jpg?fit=2560%2C1707&ssl=1",
            name: "Airpods",
            description: "Active Noise Cancelation",
            price: "250"
        },
        {
            id: "2",
            image: "https://cdn.thewirecutter.com/wp-content/media/2025/03/BEST-MACBOOKS-2048px-hero.jpg?auto=webp&quality=75&width=1024",
            name: "Macbook Pro",
            description: "14-inch with M1 chip",
            price: "1900"
        },
        {
            id: "3",
            image: "https://cdn.thewirecutter.com/wp-content/media/2024/09/applewatch-2048px-4495.jpg?auto=webp&quality=75&width=1024",
            name: "Apple Watch",
            description: "Smart wearable with heart tracking",
            price: "800"
        }
    ]
    return(
        <>
            <section>
                <Header></Header>
                <Container>
                    <Row lg={12} className="justify-content-end" style={{marginBottom: 16}}>
                        <Col xs="auto" style={{marginTop:16}}>
                            <Button variant="primary">  <i class="bi bi-plus-circle" style={{marginRight:"8px"}}></i>Add Product</Button>
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
                                        <Card.Img variant="top" src={products.image} alt="loading"/>
                                        <Card.Body>
                                            <Card.Title>{products.name}</Card.Title>
                                            <Card.Text>
                                            {products.description}
                                            </Card.Text>

                                            <div className="d-flex justify-content-between align-items-center">
                                                <p style={{color:"#165691", fontWeight:'bold',fontSize: "13px"}}>${products.price}</p>

                                                <div>
                                                    <i class="bi bi-pencil-square" style={{cursor:'pointer', marginRight: 10 }}></i>
                                                    <i class="bi bi-trash3" style={{cursor:'pointer'}}></i>
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
