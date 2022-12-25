import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";


const AddProduct = () => {
   const [productCode, setProductCode] = useState("");
   const [name, setName] = useState("");
   const [price, setPrice] = useState(0);
   const [category, setCategory] = useState("");
   const [quantity, setQauntity] = useState("");
   const handleSubmit = (event) => {
     event.preventDefault();
     // Add the product to your database or API here
     // You could also dispatch an action to a Redux store here
     console.log(`Added product: ${name} - ${price} - ${category}`);
     // Reset the form
     setName("");
     setPrice(0);
   };

   return (
     <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
       <Form.Group controlId="formCode" className="formGroup">
         <Form.Label className="fw-bold">Product Code</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter product Code"
           value={productCode}
           onChange={(event) => setProductCode(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formName" className="formGroup pt-3" >
         <Form.Label className="fw-bold">Product Name</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter product name"
           value={name}
           onChange={(event) => setName(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formPrice" className="formGroup pt-3">
         <Form.Label className="fw-bold">Product Price</Form.Label>
         <Form.Control
           type="number"
           placeholder="Enter product price"
           value={price}
           onChange={(event) => setPrice(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formCategory" className="formGroup pt-3">
         <Form.Label className="fw-bold">Product Category</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter product Category"
           value={category}
           onChange={(event) => setCategory(event.target.value)}
         />
       </Form.Group>
       <Form.Group controlId="formQuantity" className="formGroup pt-3">
         <Form.Label className="fw-bold">Qauntity</Form.Label>
         <Form.Control
           type="text"
           placeholder="Enter a Quantity With Unit"
           value={quantity}
           onChange={(event) => setQauntity(event.target.value)}
         />
       </Form.Group>

       <Button variant="primary" type="submit" className="addBtn mt-3">
         Add Product
       </Button>
     </Form>
   );
};

export default AddProduct;

// function AddProductForm() {

// }
