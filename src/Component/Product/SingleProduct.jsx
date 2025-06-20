import React from "react";
import "./SingleProduct.css"; // only keeping color circles

const SingleProduct = ({ img, price }) => {
  return (
    <div className="card">
      <img src={img} className="card-img-top" alt="shoe image" />
      <div className="card-body d-flex flex-column justify-content-between">
        <div>
          <h5 className="card-title">MEN's Shoe</h5>
          <p className="card-text">The bulk of the card's content.</p>

          <div className="star mb-2">
            <i className="fa-solid fa-star text-danger"></i>
            <i className="fa-solid fa-star text-danger"></i>
            <i className="fa-solid fa-star text-danger"></i>
            <i className="fa-solid fa-star"></i>
            <i className="fa-solid fa-star"></i>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <div className="colors text-uppercase fw-semibold">
              <p className="mb-1">Colors</p>
              <div className="d-flex gap-2">
                <div className="box" style={{ backgroundColor: "yellow" }}></div>
                <div className="box" style={{ backgroundColor: "red" }}></div>
                <div className="box" style={{ backgroundColor: "blue" }}></div>
              </div>
            </div>
            <h4 className="mb-0">{price}</h4>
          </div>
        </div>

        <button type="button" className="btn btn-primary w-100 mt-3">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleProduct;
