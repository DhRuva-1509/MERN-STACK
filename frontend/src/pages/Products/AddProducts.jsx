import { Button, Form } from "react-bootstrap";
import React from "react";
import ProductModal from "../../components/ProductModal";

const AddProducts = ({onAddProduct}) => {
    const [showModal, setShowModal] = React.useState(false);
    const [newErrors, setNewErrors] = React.useState({});
    const [formData, setFormData] = React.useState({
        name : "",
        description: "",
        price: "",
        imageUrl: ""
    })

    const handleSubmit = (e) => {
        e.preventDefault();

        const errors = {};

        if(!formData.name.trim()){
            errors.name = "Name is required"
        }

        if(!formData.description.trim()){
            errors.description = "description is required"
        }

        if(!formData.price.trim()){
            errors.price = "Price is required"
        }

        if(!formData.imageUrl.trim()){
            errors.imageUrl = "imageUrl is required"
        }

        if(Object.keys(errors).length > 0){
            setNewErrors(errors)
        }
        else{
            console.log("Submitted Product: ", formData)

            onAddProduct({
                name: formData.name,
                description: formData.description,
                price: formData.price,
                imageUrl: formData.imageUrl
            });
            setNewErrors({})
            setShowModal(false)
        }

    }

    return(
        <>
            <Button varient="primary" onClick={()=>{setShowModal(true)}}>
                <i className="bi bi-plus-circle" style={{marginRight:"8px"}}></i>Add Product
            </Button>
            <ProductModal
                show={showModal}
                onClose={()=>{setShowModal(false)}}
                onSubmit={handleSubmit}
                title= "Add a new Product"
                submitTitle="Add Product"
            >
            <Form>
                <Form.Group className="md-3">
                    <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the product name"
                        value={formData.name}
                        style={{marginBottom: "8px"}}
                        onChange={(e)=> setFormData({...formData, name:e.target.value})}
                        isInvalid={!!newErrors.name}
                    />
                </Form.Group>

                <Form.Group className="md-3">
                    <Form.Label>Product Description</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows={3}
                        placeholder="Enter the product description"
                        value={formData.description}
                        style={{marginBottom: "8px"}}
                        onChange={(e)=> setFormData({...formData, description:e.target.value})}
                        isInvalid={!!newErrors.description}
                    />
                </Form.Group>

                <Form.Group className="md-3">
                    <Form.Label>Product Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the product price"
                        value={formData.price}
                        style={{marginBottom: "8px"}}
                        onChange={(e)=> setFormData({...formData, price:e.target.value})}
                        isInvalid={!!newErrors.price}
                    />
                </Form.Group>
                <Form.Group className="md-3">
                    <Form.Label>Product Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter the product image URL"
                        value={formData.imageUrl}
                        style={{marginBottom: "8px"}}
                        onChange={(e)=> setFormData({...formData, imageUrl:e.target.value})}
                        isInvalid={!!newErrors.imageUrl}
                    />
                </Form.Group>
            </Form>
            </ProductModal>
        </>
    )
}
export default AddProducts