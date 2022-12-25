import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";

const AddRetailer = () => {
  const [retailerusername, setRetailerUsername] = useState("");
  const [areaCode, setAreaCode] = useState("");
  const [retailerPhoneNo, setRetailerPhoneNo] = useState("");
  const [retailerEmail, setRetailerEmail] = useState("");
  const [retailerAddress, setRetailerAddress] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add the product to your database or API here
    // You could also dispatch an action to a Redux store here
    console.log(`Added product: ${retailerusername} - ${retailerEmail} - ${retailerAddress}`);
    // Reset the form
    setRetailerUsername("");
    setAreaCode("");
    setRetailerPhoneNo("");
    setRetailerEmail("");
    setRetailerAddress("");
};

  return (
    <Form onSubmit={handleSubmit} className="w-50 mx-auto mt-5">
      <Form.Group controlId="formCode" className="formGroup">
        <Form.Label className="fw-bold">Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter retailer name"
          value={retailerusername}
          onChange={(event) => setRetailerUsername(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formName" className="formGroup pt-3">
        <Form.Label className="fw-bold">Area Code</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter area code"
          value={areaCode}
          onChange={(event) => setAreaCode(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formPrice" className="formGroup pt-3">
        <Form.Label className="fw-bold">Phone No</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter phone number"
          value={retailerPhoneNo}
          onChange={(event) => setRetailerPhoneNo(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formCategory" className="formGroup pt-3">
        <Form.Label className="fw-bold">Email</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter email"
          value={retailerEmail}
          onChange={(event) => setRetailerEmail(event.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formQuantity" className="formGroup pt-3">
        <Form.Label className="fw-bold">Address</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter address"
          value={retailerAddress}
          onChange={(event) => setRetailerAddress(event.target.value)}
        />
      </Form.Group>

      <Button variant="primary" type="submit" className="addBtn mt-3">
        Add Retailer
      </Button>
    </Form>
  );
};

export default AddRetailer;

// AddRetailer
