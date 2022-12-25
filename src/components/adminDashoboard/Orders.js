import React from "react";
import { Link } from "react-router-dom";
import { fakeApi } from "../fakeAPi";

const Orders = () => {
  return (
    <div className="d-flex">
      <div className="row my-5 mx-4">
        <h3 className="fs-4 mb-3 text-white">Recent Orders</h3>
        <div className="col">
          <table className="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col" width={50}>
                  Order ID
                </th>
                <th scope="col">Retailer</th>
                <th scope="col">Date</th>
                <th scope="col">Approved Status</th>
                <th scope="col">Order Status</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              {fakeApi.orders.map((order, i) => {
                return (
                  <tr key={i} className="py-4">
                    <th scope="row">{order.orderId}</th>
                    <td>{order.retailer}</td>
                    <td>{order.date}</td>
                    <td>{order.approvedStatus}</td>
                    <td>{order.orderStatus}</td>
                    {/* <button className="btn btn-light">
                      <i className="fas fa-solid fa-pen"></i>
                    </button> */}
                    <td>
                      <Link>{order.details}</Link>
                    </td>
                  </tr>
                );
              })}
              {/* <button className="btn btn-danger mx-4 my-4">Delete</button> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Orders;
