import { fakeApi } from "../fakeAPi";
import "./dashboard.css";
const Manufactures = () => {
  return (
    <div className="d-flex">
      <div className="row my-5 mx-4">
        <h3 className="fs-4 mb-3">Manufactures</h3>
        <div className="col">
          <table className="table bg-white rounded shadow-sm  table-hover">
            <thead>
              <tr>
                <th scope="col" width={50}>
                  Sr.No
                </th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Username</th>
                <th scope="col">Edit</th>
              </tr>
            </thead>
            <tbody>
              {fakeApi.manufactures.map((manufacture, i) => {
                return (
                  <tr key={i} className="py-4">
                    <th scope="row">{manufacture.id}</th>
                    <td>{manufacture.name}</td>
                    <td>{manufacture.email}</td>
                    <td>{manufacture.phoneno}</td>
                    <td>{manufacture.username}</td>
                    <td>
                      <button className="btn btn-light">
                        <i className="fas fa-solid fa-pen"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
              <button className="btn btn-danger mx-4 my-4">Delete</button>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Manufactures;
