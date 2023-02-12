import React, { useState } from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";

const ProcurementModule = () => {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "Supplier A",
      contact: "contactA@email.com",
      rawMaterial: "A,B",
    },
    {
      id: 2,
      name: "Supplier B",
      contact: "contactB@email.com",
      rawMaterial: "C,F",
    },
    {
      id: 3,
      name: "Supplier C",
      contact: "contactC@email.com",
      rawMaterial: "D,E",
    },
  ]);
  const [selectedSupplier, setSelectedSupplier] = useState({});
  const [purchaseOrders, setPurchaseOrders] = useState([]);
   const [quantity, setQauntity] = useState("");

  const handleSelectSupplier = (supplier) => {
    setSelectedSupplier(supplier);
  };

  const handleSubmitPurchaseOrder = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    } else {
      setPurchaseOrders([
        ...purchaseOrders,
        {
          id: purchaseOrders.length + 1,
          supplier: selectedSupplier.name,
          date: form.elements.date.value,
          items: form.elements.items.value,
          quantity: form.elements.quantity.value
        },
      ]);
      form.reset();
    }
  };

  return (
    <Container>
      <Row className="my-5">
        <Col xs={12} md={6}>
          <h3>Supplier List</h3>
          <Table bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Contact</th>
                {/* <th>Phone No</th> */}
                <th>Raw Materials</th>
              </tr>
            </thead>
            <tbody>
              {suppliers.map((supplier) => (
                <tr
                  key={supplier.id}
                  onClick={() => handleSelectSupplier(supplier)}
                >
                  <td>{supplier.id}</td>
                  <td>{supplier.name}</td>
                  <td>{supplier.contact}</td>
                  <td>{supplier.rawMaterial}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs={12} md={6}>
          <h3>Create Purchase Order</h3>
          <Form onSubmit={handleSubmitPurchaseOrder}>
            <Form.Group controlId="supplier">
              <Form.Label className="py-2 fw-bold">Supplier</Form.Label>
              <Form.Control
                type="text"
                placeholder="Select a supplier"
                value={selectedSupplier.name || ""}
                // disabled
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label className="py-3 fw-bold">Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Form.Group controlId="items">
              <Form.Label className="py-3 fw-bold">Items</Form.Label>
              <Form.Control type="text" placeholder="Enter items" required />
            </Form.Group>
            <Form.Group controlId="quantity" className="formGroup pt-3">
              <Form.Label className="fw-bold">Qauntity</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter  a Quantity"
                required
              />
              {/* <Form.Control
                type="text"
                placeholder="Enter a Quantity With Unit"
                value={quantity}
                onChange={(event) => setQauntity(event.target.value)}
              /> */}
            </Form.Group>
            <Button
              variant="primary"
              type="submit"
              className="record btnDelete"
            >
              Submit
            </Button>
          </Form>
        </Col>
      </Row>
      <Row className="my-5">
        <Col xs={12}>
          <h3>Purchase Order List</h3>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Supplier</th>
                <th>Date</th>
                <th>Items</th>
                <th>Quantity</th>
              </tr>
            </thead>
            <tbody>
              {purchaseOrders.map((purchaseOrder) => (
                <tr key={purchaseOrder.id}>
                  <td>{purchaseOrder.id}</td>
                  <td>{purchaseOrder.supplier}</td>
                  <td>{purchaseOrder.date}</td>
                  <td>{purchaseOrder.items}</td>
                  <td>{purchaseOrder.quantity}</td>
                </tr>
              ))}
              <button className="btn btn-danger mx-4 my-4 btnDelete">
                Save
              </button>
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ProcurementModule;
