
const SignUp = () => {
  return (
    <>
    <section className="vh-100 login " >
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-12 col-md-8 col-lg-6 col-xl-5">
            <div
              className="card shadow-2-strong"
              style={{ borderRadius: "1rem" }}
            >
              <div className="card-body p-5 ">
                <h3 className="mb-5 text-center">Sign Up</h3>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typeEmailX-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                  />
                 
                </div>
                <div className="form-outline mb-4">
                <label className="form-label" htmlFor="typeEmailX-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="typeEmailX-2"
                    className="form-control form-control-lg"
                  />
                 
                </div>
                <label className="form-label" htmlFor="typePasswordX-2">
                    Password
                  </label>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="typePasswordX-2"
                    className="form-control form-control-lg"
                  />
                
                </div>
                {/* select option */}
                <label className="form-label" htmlFor="loginOption">
                    Register as a
                  </label>
                  <div className="form-check d-flex justify-content-start mb-4">
                    <select id="loginOption"  className="form-control form-control-md">
                      <option value="Admin">Admin</option>
                      <option value="Retailer">Retailer</option>
                      <option value="Logistic">Logistic</option>
                      <option value="Manufacturer">Manufacturer</option>
                    </select>
                  </div>
                <button
                  className="btn btn-primary loginBtn"
                  type="submit"
                >
                  Signup
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default SignUp