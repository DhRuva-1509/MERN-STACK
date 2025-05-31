import React from "react";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import heroBackground from "/svg/Hero.svg"

const Hero = () => {
    return(
        <>
            <div style={{background: 'linear-gradient(to bottom right, #2a82d4, #522ad4,#522ad4)', color: 'white',height:'100vh', alignContent:'center', justifyItems:'center', paddingRight:16, paddingLeft: 16}}>
                <Row style={{width:'80%',height:'70%',alignContent:'center', justifyItems:'center'}}>
                    <Col>
                        <p style={{fontWeight:'bold', fontSize: "48px", lineHeight:1.2, alignSelf:'center',marginTop: 130}}>Welcome to ProdManage</p>
                        <p style={{width: '100%', alignSelf:'center'}}>Effortlessly manage your products with our all-in-tool.
                            Create, view, edit and delete products - fast, simple and reliable.
                        </p>
                        <Link to="/products">
                            <Button variant="light" size="lg" className="mt-3">Explore Products</Button>
                        </Link>
                    </Col>

                    <Col>
                        <img src={heroBackground} style={{width: 400, height: 400}} ></img>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Hero;