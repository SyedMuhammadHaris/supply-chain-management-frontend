import React, { useState } from "react";
import { Container, Row, Col, Form, Table, Button } from "react-bootstrap";

const InventoryManagement = () => {
  const [inventory, setInventory] = useState([
    {
      id: 1,
      product: "Product A",
      stock: 10,
      returns: 2,
      waste: 2,
      product1: "Product D",
    },
    {
      id: 2,
      product: "Product B",
      stock: 20,
      returns: 1,
      waste: 0,
      product1: "Product E",
    },
    {
      id: 3,
      product: "Product C",
      stock: 5,
      returns: 0,
      waste: 1,
      product1: "Product F",
    },
  ]);
  const [selectedInventory, setSelectedInventory] = useState({});
  const [returnQuantity, setReturnQuantity] = useState(0);

  const handleSelectInventory = (item) => {
    setSelectedInventory(item);
  };

 

  const handleRecordReturn = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    setInventory(
      inventory.map((item) => {
        if (item.id === selectedInventory.id) {
          return {
            ...item,
            stock: item.stock - returnQuantity,
            returns: item.returns + returnQuantity,
          };
        }
        return item;
      })
    );
    form.reset();
    setReturnQuantity(0);
    setSelectedInventory({});
  };

  return (
    <>
      <Container>
        <Row className="my-5">
          <Col xs={12} md={6}>
            <h3>Inventory Of Finished Product</h3>
            <Table bordered hover className="my-4">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Stock</th>
                  <th>Returns</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} onClick={() => handleSelectInventory(item)}>
                    <td>{item.id}</td>
                    <td>{item.product}</td>
                    <td>{item.stock}</td>
                    <td>{item.returns}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={6} className="px-4">
            <h3>Actions</h3>
            {Object.keys(selectedInventory).length === 0 ? (
              <p>Please select an inventory item to perform actions.</p>
            ) : (
              <>
                <h5>Selected Inventory: {selectedInventory.product}</h5>
                <Form onSubmit={handleRecordReturn}>
                  <Form.Group controlId="returnQuantity">
                    <Form.Label>Record Return</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Return Quantity"
                      min={0}
                      onChange={(event) =>
                        setReturnQuantity(event.target.value)
                      }
                    />
                  </Form.Group>
                  <Button type="submit" className="record">
                    Record
                  </Button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
      <Container>
        <Row className="my-5">
          <Col xs={12} md={6}>
            <h3>Inventory Of Raw Materials</h3>
            <Table bordered hover className="my-4">
              <thead>
                <tr>
                  <th>#</th>
                  <th>Product</th>
                  <th>Stock</th>
                  <th>Waste</th>
                </tr>
              </thead>
              <tbody>
                {inventory.map((item) => (
                  <tr key={item.id} onClick={() => handleSelectInventory(item)}>
                    <td>{item.id}</td>
                    <td>{item.product1}</td>
                    <td>{item.stock}</td>
                    <td>{item.waste}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col xs={12} md={6} className="px-4">
            <h3>Actions</h3>
            {Object.keys(selectedInventory).length === 0 ? (
              <p>Please select an inventory item to perform actions.</p>
            ) : (
              <>
                <h5>Selected Inventory: {selectedInventory.product}</h5>
                <Form onSubmit={handleRecordReturn}>
                  <Form.Group controlId="wasteQuantity">
                    <Form.Label>Record Waste</Form.Label>
                    <Form.Control
                      type="number"
                      placeholder="Waste"
                      min={0}
                      onChange={(event) =>
                        setReturnQuantity(event.target.value)
                      }
                    />
                  </Form.Group>
                  <Button type="submit" className="record">
                    Waste
                  </Button>
                </Form>
              </>
            )}
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default InventoryManagement;
