import { fakeApi } from "../fakeAPi";
import "./dashboard.css";
const Products = () => {
  return (
    <div className="d-flex my-4">
      <div className="row my-5 mx-4">
        <h3 className="fs-4 mb-3">Products</h3>
        <div className="col">
          <table className="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col" width={50}>
                  Code
                </th>
                <th scope="col">Name</th>
                <th scope="col">Price</th>
                <th scope="col">Category</th>
                <th scope="col">Quantity</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {fakeApi.products.map((product, i) => {
                return (
                  <tr key={i} className="py-4">
                    <th scope="row">{product.code}</th>
                    <td>{product.name}</td>
                    <td>{product.price}</td>
                    <td>{product.quantity}</td>
                    <td>{product.category}</td>
                    <td>
                      <button className="btn btn-light">
                        <i className="fas fa-solid fa-pen"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}

              <button className="btn btn-danger mx-4 my-4 btnDelete">
                Delete
              </button>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Products;
