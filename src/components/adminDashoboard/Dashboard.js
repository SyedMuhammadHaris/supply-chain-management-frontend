import { useState } from "react";
import { Link } from "react-router-dom";
import "./dashboard.css";
import Orders from "./Orders";

const Dashboard = () => {
  //   const []
  const [isToggle, setToggle] = useState(false);

  const handleClick = () => {
    setToggle(!isToggle);
  };

  return (
    <>
      <div className={`d-flex ${isToggle ? "toggled" : null}`} id="wrapper">
        {/* Sidebar */}
        <div className="bg-white" id="sidebar-wrapper">
          <div className="sidebar-heading text-center py-4 primary-text fs-4 fw-bold text-uppercase border-bottom">
            <i className="fas fa-truck me-1" />
            Vector SCMS
          </div>
          <div className="list-group list-group-flush my-3">
            <Link
              to="/dashboard"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-tachometer-alt me-2" />
              Dashboard
            </Link>
            <Link
              to="/addproduct"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-solid fa-plus me-2" />
              Add Products
            </Link>
            <Link
              to="/addmanufacture"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-solid fa-plus me-2" />
              Add Manufactures
            </Link>
            <Link
              to="/addretailer"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-solid fa-plus me-2" />
              Add Retailers
            </Link>
            <Link
              to="/addtransporter"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-solid fa-plus me-2" />
              Add Transporter
            </Link>
            <Link
              to="/managecatogories"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-solid fa-plus me-2" />
              Manage Catogories
            </Link>
            <Link
              href="#"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-chart-line me-2"></i>Analytics
            </Link>
            <Link
              to="/chat"
              className="list-group-item list-group-item-action bg-transparent second-text fw-bold"
            >
              <i className="fas fa-comment-dots me-2" />
              Chat
            </Link>

            <Link
              to="/"
              className="list-group-item list-group-item-action bg-transparent  fw-bold"
            >
              <i className="fas fa-power-off me-2" />
              Logout
            </Link>
          </div>
        </div>
        {/* /#sidebar-wrapper */}
        {/* Page Content */}
        <div id="page-content-wrapper">
          <nav className="navbar navbar-expand-lg navbar-light bg-transparent py-4 px-4">
            <div className="d-flex align-items-center">
              <i
                className="fas fa-align-left primary-text fs-4 me-3"
                id="menu-toggle"
                onClick={handleClick}
              />
              <h2 className="fs-2 m-0">Dashboard</h2>
            </div>

            <p className="ms-auto">
              <i className="fas fa-user me-2"></i>John Doe
            </p>
          </nav>
          <div className="container-fluid px-4">
            <div className="row g-3 my-2">
              <div className="col-md-3">
                <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <Link to="/manufacture">
                    <p className="fs-5">Manufactures</p>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <Link to="/retailer">
                    <p className="fs-5">Retailers</p>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <Link to="/transporter">
                    <p className="fs-5">Transporter</p>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <Link to="/products">
                    <p className="fs-5">Products</p>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <Link to="/orders">
                    <p className="fs-5">Orders</p>
                  </Link>
                </div>
              </div>
              <div className="col-md-3">
                <div className="p-2 bg-white shadow-sm d-flex justify-content-around align-items-center rounded">
                  <Link to="/warehouse">
                    <p className="fs-5">Warehouse</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row my-5">
              {/* <h3 className="fs-4 mb-3">Recent Orders</h3> */}
              {/* <div className="col">
                <table className="table bg-white rounded shadow-sm  table-hover">
                  <thead>
                    <tr>
                      <th scope="col" width={50}>
                        #
                      </th>
                      <th scope="col">Product</th>
                      <th scope="col">Customer</th>
                      <th scope="col">Price</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Television</td>
                      <td>Jonny</td>
                      <td>$1200</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Laptop</td>
                      <td>Kenny</td>
                      <td>$750</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Cell Phone</td>
                      <td>Jenny</td>
                      <td>$600</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Fridge</td>
                      <td>Killy</td>
                      <td>$300</td>
                    </tr>
                    <tr>
                      <th scope="row">5</th>
                      <td>Books</td>
                      <td>Filly</td>
                      <td>$120</td>
                    </tr>
                    <tr>
                      <th scope="row">6</th>
                      <td>Gold</td>
                      <td>Bumbo</td>
                      <td>$1800</td>
                    </tr>
                    <tr>
                      <th scope="row">7</th>
                      <td>Pen</td>
                      <td>Bilbo</td>
                      <td>$75</td>
                    </tr>
                    <tr>
                      <th scope="row">8</th>
                      <td>Notebook</td>
                      <td>Frodo</td>
                      <td>$36</td>
                    </tr>
                    <tr>
                      <th scope="row">9</th>
                      <td>Dress</td>
                      <td>Kimo</td>
                      <td>$255</td>
                    </tr>
                    <tr>
                      <th scope="row">10</th>
                      <td>Paint</td>
                      <td>Zico</td>
                      <td>$434</td>
                    </tr>
                    <tr>
                      <th scope="row">11</th>
                      <td>Carpet</td>
                      <td>Jeco</td>
                      <td>$1236</td>
                    </tr>
                    <tr>
                      <th scope="row">12</th>
                      <td>Food</td>
                      <td>Haso</td>
                      <td>$422</td>
                    </tr>
                  </tbody>
                </table>
              </div> */}
              <Orders />
            </div>
          </div>
        </div>
      </div>
      {/* /#page-content-wrapper */}
    </>
  );
};

export default Dashboard;
