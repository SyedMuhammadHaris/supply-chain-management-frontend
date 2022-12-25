import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";


const AddManufacture = () => {
    const [manufacturerName, setManufacturerName] = useState("");
    const [manufacturerEmail, setManufacturerEmail] = useState("");
    const [manufacturerPhone, setManufacturerPhone] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the product to your database or API here
    // You could also dispatch an action to a Redux store here
    console.log(`Added product: ${manufacturerName} - ${manufacturerEmail} - ${manufacturerPhone}`);
    // Reset the form
    setManufacturerName("");
    setManufacturerEmail("");
    setManufacturerPhone("");
  };

  return (
    <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
      <Form.Group controlId="formCode" className="formGroup">
        <Form.Label className="fw-bold">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={manufacturerName}
          onChange={(event) => setManufacturerName(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formName" className="formGroup pt-3">
        <Form.Label className="fw-bold">Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Email"
          value={manufacturerEmail}
          onChange={(event) => setManufacturerEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPrice" className="formGroup pt-3">
        <Form.Label className="fw-bold">Phone No</Form.Label>
        <Form.Control
          type="type"
          placeholder="Enter phone number"
          value={manufacturerPhone}
          onChange={(event) => setManufacturerPhone(event.target.value)}
        />
      </Form.Group>
      {/* <Form.Group controlId="formCategory" className="formGroup pt-3">
        <Form.Label className="fw-bold">Product Category</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter product Category"
          value={category}
          onChange={(event) => setCategory(event.target.value)}
        />
      </Form.Group> */}
     

      <Button variant="primary" type="submit" className="addBtn mt-3">
        Add Manufacture
      </Button>
    </Form>
  );
};

export default AddManufacture;

