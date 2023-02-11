import React, { useState } from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";

const ProcurementModule = () => {
  const [suppliers, setSuppliers] = useState([
    {
      id: 1,
      name: "Supplier A",
      contact: "contactA@email.com",
      deliverySchedule: "Mon-Wed",
    },
    {
      id: 2,
      name: "Supplier B",
      contact: "contactB@email.com",
      deliverySchedule: "Tue-Thu",
    },
    {
      id: 3,
      name: "Supplier C",
      contact: "contactC@email.com",
      deliverySchedule: "Wed-Fri",
    },
  ]);
  const [selectedSupplier, setSelectedSupplier] = useState({});
  const [purchaseOrders, setPurchaseOrders] = useState([]);

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
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Contact</th>
                <th>Delivery Schedule</th>
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
                  <td>{supplier.deliverySchedule}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
        <Col xs={12} md={6}>
          <h3>Create Purchase Order</h3>
          <Form onSubmit={handleSubmitPurchaseOrder}>
            <Form.Group controlId="supplier">
              <Form.Label>Supplier</Form.Label>
              <Form.Control
                type="text"
                placeholder="Select a supplier"
                value={selectedSupplier.name || ""}
                // disabled
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Form.Group controlId="items">
              <Form.Label>Items</Form.Label>
              <Form.Control type="text" placeholder="Enter items" required />
            </Form.Group>
            <Button variant="primary" type="submit">
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
              </tr>
            </thead>
            <tbody>
              {purchaseOrders.map((purchaseOrder) => (
                <tr key={purchaseOrder.id}>
                  <td>{purchaseOrder.id}</td>
                  <td>{purchaseOrder.supplier}</td>
                  <td>{purchaseOrder.date}</td>
                  <td>{purchaseOrder.items}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default ProcurementModule;
