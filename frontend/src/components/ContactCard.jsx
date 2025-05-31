import React from "react";
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from "react-bootstrap/esm/Container";

const ContactCard = () => {
    return (
    <Container>
        <Row className="justify-content-center">
            <Col xs={12} sm={8} md={6} lg={4}>
                <Card style={{ boxShadow: '0 4px 2px rgba(0, 0, 0, 0.2)' }}>
                    <Card.Body style={{justifyItems:'center'}}>
                        <Card.Title style={{fontWeight:'bold', fontSize: 32, marginBottom: 20}}>Contact Us</Card.Title>
                        
                        <Card.Text style={{textAlign:'center'}}>
                            <p><span style={{fontSize: 18, fontWeight:'bold', marginBottom: 20}}>Address: </span>123 React Street, UI City, CA 90210</p>
                            <p><span style={{fontSize: 18, fontWeight:'bold', marginBottom: 20}}>Email: </span>Hello@prodmanage.com</p>
                            <p><span style={{fontSize: 18, fontWeight:'bold'}}>Phone: </span>+1 (555) 123-4567</p>
                        </Card.Text>
                    </Card.Body>
                </Card>
            </Col>
        </Row>
    </Container>
    );
}

export default ContactCard