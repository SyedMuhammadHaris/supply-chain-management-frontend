import React, { useState } from "react";
import { Form, Button} from "react-bootstrap";


const AddSupplier = () => {
    const [supplierName, setSupplierName] = useState("");
    const [supplierEmail, setSupplierEmail] = useState("");
    const [supplierPhone, setSupplierPhone] = useState("");
    const [supplierItem, setSupplierItem] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the product to your database or API here
    // You could also dispatch an action to a Redux store here
    console.log(
      `Added product: ${supplierName} - ${supplierEmail} - ${supplierPhone} - ${supplierItem}`
    );
    // Reset the form
    setSupplierName("");
    setSupplierEmail("");
    setSupplierPhone("");
    setSupplierItem("");
  };

  return (
    <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
      <Form.Group controlId="formCode" className="formGroup">
        <Form.Label className="fw-bold">Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter name"
          value={supplierName}
          onChange={(event) => setSupplierName(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formName" className="formGroup pt-3">
        <Form.Label className="fw-bold">Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter Email"
          value={supplierEmail}
          onChange={(event) => setSupplierEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPrice" className="formGroup pt-3">
        <Form.Label className="fw-bold">Phone No</Form.Label>
        <Form.Control
          type="type"
          placeholder="Enter phone number"
          value={supplierPhone}
          onChange={(event) => setSupplierPhone(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPrice" className="formGroup pt-3">
        <Form.Label className="fw-bold">Items Name</Form.Label>
        <Form.Control
          type="type"
          placeholder="Enter phone number"
          value={supplierItem}
          onChange={(event) => setSupplierItem(event.target.value)}
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
        Add Supplier
      </Button>
    </Form>
  );
};

export default AddSupplier;

