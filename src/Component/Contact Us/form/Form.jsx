import React from "react";
const Form = () => {
  return (
    <div className="container mb-4" style={{ color: "#797979" }}>
      {/* gx-2 = 8px horizontal gap between columns */}
      <div className="row gx-2 d-flex justify-content-between flex-wrap">
        {/* Left Column */}
        <div className="col-lg-7 col-12 border border-1 p-3">
          <h3>Drop Us a Line</h3>
          <div
            className="line w-100 my-3"
            style={{ height: "1px", background: "#dee2e6" }}
          ></div>

          <form className="row g-3">
            <div className="col-12">
              <label htmlFor="inputPassword4" className="form-label">
                Enter Your Name
              </label>
              <input type="text" className="form-control" id="inputPassword4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputEmail4" className="form-label">
                Enter Email
              </label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-12">
              <label htmlFor="inputAddress" className="form-label">
                Phone Number
              </label>
              <input type="number" className="form-control" id="inputAddress" />
            </div>
            <div className="col-12">
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Message
              </label>
              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="5"
              ></textarea>
            </div>
            <div className="col-4">
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
        </div>

        {/* Right Column */}
        <div className="col-lg-4 col-12 border border-1 lh-1 p-3" style={{height:'fit-content'}}>
          <div className="form-data">
            <h4>Address</h4>
            <p>123 Street Name, City, Australia</p>
          </div>
          <div
            className="line w-100 my-3"
            style={{ height: "1px", background: "#dee2e6" }}
          ></div>
          <div className="form-data">
            <h4>Phone</h4>

            <p>Toll Free (123) 472-796</p>
            <p style={{ lineHeight: "0.1" }}>Mobile : +91-9910XXXX</p>
          </div>
          <div
            className="line w-100 my-3"
            style={{ height: "1px", background: "#dee2e6" }}
          ></div>
          <div className="form-data">
            <h4>Email</h4>
            <p>mail@example.com</p>
          </div>
          <div
            className="line w-100 my-3"
            style={{ height: "1px", background: "#dee2e6" }}
          ></div>
          <div className="form-data">
            <h4>Working Days</h4>
            <p>Mon - FRI / 9:30 AM - 6:30 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
