import { fakeApi } from "../fakeAPi";
import Dashboard from "./Dashboard";
import "./dashboard.css";
// const Manufactures = () => {
//   return (
//     <div className="d-flex">
//       {/* <Dashboard /> */}
//       <div className="row my-5 mx-4">
//         <h3 className="fs-4 mb-3">Manufactures</h3>
//         <div className="col">
//           <table className="table bg-white rounded shadow-sm  table-hover">
//             <thead>
//               <tr>
//                 <th scope="col" width={50}>
//                   Sr.No
//                 </th>
//                 <th scope="col">Name</th>
//                 <th scope="col">Email</th>
//                 <th scope="col">Phone</th>
//                 <th scope="col">Username</th>
//                 <th scope="col">Edit</th>
//               </tr>
//             </thead>
//             <tbody>
//               {fakeApi.manufactures.map((manufacture, i) => {
//                 return (
//                   <tr key={i} className="py-4">
//                     <th scope="row">{manufacture.id}</th>
//                     <td>{manufacture.name}</td>
//                     <td>{manufacture.email}</td>
//                     <td>{manufacture.phoneno}</td>
//                     <td>{manufacture.username}</td>
//                     <td>
//                       <button className="btn btn-light">
//                         <i className="fas fa-solid fa-pen"></i>
//                       </button>
//                     </td>
//                   </tr>
//                 );
//               })}
//               <button className="btn btn-danger mx-4 my-4 btnDelete">Delete</button>
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Manufactures;

import React, { useState } from "react";
import { Table, Button, Modal, Form } from "react-bootstrap";

const CreateOrderForm = ({ onCreate }) => {
  const [formData, setFormData] = useState({
    id: "",
    customerName: "",
    orderDate: "",
    orderTotal: "",
    orderStatus: "",
  });

  const handleInputChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onCreate({ ...formData });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formOrderId">
        <Form.Label>Order ID</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter order ID"
          name="id"
          value={formData.id}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formCustomerName">
        <Form.Label>Customer Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter customer name"
          name="customerName"
          value={formData.customerName}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formOrderDate">
        <Form.Label>Order Date</Form.Label>
        <Form.Control
          type="date"
          placeholder="Enter order date"
          name="orderDate"
          value={formData.orderDate}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formOrderTotal">
        <Form.Label>Order Total</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter order total"
          name="orderTotal"
          value={formData.orderTotal}
          onChange={handleInputChange}
        />
      </Form.Group>

      <Form.Group controlId="formOrderStatus">
        <Form.Label>Order Status</Form.Label>
        <Form.Control
          as="select"
          name="orderStatus"
          value={formData.orderStatus}
          onChange={handleInputChange}
        >
          <option value="">Select order status</option>
          <option value="pending">Pending</option>
          <option value="shipped">Shipped</option>
          <option value="delivered">Delivered</option>
        </Form.Control>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

// export default CreateOrderForm;
// const OrderManagement = () => {
const Manufactures = () => {
  const [orders, setOrders] = useState([]);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showUpdateModal, setShowUpdateModal] = useState(false);
  const [selectedOrder, setSelectedOrder] = useState({});

  const handleCreateOrder = (order) => {
    setOrders([...orders, order]);
    setShowCreateModal(false);
  };

  const handleUpdateOrder = (order) => {
    setOrders(
      orders.map((existingOrder) => {
        if (existingOrder.id === order.id) {
          return order;
        }
        return existingOrder;
      })
    );
    setShowUpdateModal(false);
  };

  const handleDeleteOrder = (id) => {
    setOrders(orders.filter((order) => order.id !== id));
  };

  return (
    <div className="order-management my-5 mx-5">
      <Button variant="primary" onClick={() => setShowCreateModal(true)}>
        Create Order
      </Button>

      <Table striped bordered hover className="my-5">
        <thead>
          <tr>
            <th>Order ID</th>
            <th>Customer Name</th>
            <th>Order Date</th>
            <th>Order Total</th>
            <th>Order Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {orders.map((order) => (
            <tr key={order.id} >
              <td>{order.id}</td>
              <td>{order.customerName}</td>
              <td>{order.orderDate}</td>
              <td>{order.orderTotal}</td>
              <td>{order.orderStatus}</td>
              <td>
                <Button
                  variant="secondary"
                  onClick={() => {
                    setSelectedOrder(order);
                    setShowUpdateModal(true);
                  }}
                >
                  Update
                </Button>
                {"  "}
                <Button
                  variant="danger"
                  onClick={() => handleDeleteOrder(order.id)}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>

      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CreateOrderForm onCreate={handleCreateOrder} />
        </Modal.Body>
      </Modal>

      <Modal show={showUpdateModal} onHide={() => setShowUpdateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Update Order</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {/* <UpdateOrderForm order={selectedOrder} onUpdate={handleUpdateOrder} /> */}
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default Manufactures;
// export default OrderManagement;