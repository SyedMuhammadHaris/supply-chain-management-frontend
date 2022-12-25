import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";

const AddProduct = () => {
   const [productCode, setProductCode] = useState("");
   const [name, setName] = useState("");
   const [price, setPrice] = useState(0);
   const [category, setCategory] = useState("");
   const [description, setDescription] = useState("");
   const handleSubmit = (event) => {
     event.preventDefault();
     // Add the product to your database or API here
     // You could also dispatch an action to a Redux store here
     console.log(`Added product: ${name} - ${price} - ${description}`);
     // Reset the form
     setName("");
     setPrice(0);
     setDescription("");
   };

   return (
     <Form onSubmit={handleSubmit}>
       <Form.Group controlId="formCode">
         <Form.Label>Product Code</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter product Code"
           value={name}
           onChange={(event) => setName(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formName">
         <Form.Label>Product Name</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter product name"
           value={name}
           onChange={(event) => setName(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formPrice">
         <Form.Label>Product Price</Form.Label>
         <Form.Control
           type="number"
           placeholder="Enter product price"
           value={price}
           onChange={(event) => setPrice(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formCategory">
         <Form.Label>Product Category</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter product Category"
           value={description}
           onChange={(event) => setDescription(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formQuantity">
         <Form.Label>Qauntity</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter a Quantity With Unit"
           value={name}
           onChange={(event) => setName(event.target.value)}
         />
       </Form.Group>

       <Button variant="primary" type="submit">
         Add Product
       </Button>
     </Form>
   );
};

export default AddProduct;

// function AddProductForm() {

// }
