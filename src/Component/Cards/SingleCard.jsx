import React from "react";
import "./SingleCard.css";
const SingleCard = ({img}) => {
  return (
    <div className="card1 w-100 d-flex rounded">
      <img src={img} className=" cardImg" />
      <div className="details px-2 d-flex flex-column justify-content-center">
        <h5>MENs Shoe</h5>
        <p>
          the bulk of the card's content.the bulk of the card's content.the bulk
          of the card's content.the bulk of the card's content
        </p>

        <div className="star">
          <i class="fa-solid fa-star" style={{ color: "rgb(199, 27, 27)" }}></i>
          <i class="fa-solid fa-star" style={{ color: "rgb(199, 27, 27)" }}></i>
          <i class="fa-solid fa-star" style={{ color: "rgb(199, 27, 27)" }}></i>
          <i class="fa-solid fa-star"></i>
          <i class="fa-solid fa-star"></i>
        </div>
        <div className="price d-flex justify-content-between">
          <div className="colors text-uppercase fw-semibold">
            <p>colors</p>
            <div className="color d-flex gap-2">
              <div className="box" style={{ backgroundColor: "yellow" }}></div>
              <div className="box" style={{ backgroundColor: "red" }}></div>
              <div className="box" style={{ backgroundColor: "blue" }}></div>
            </div>
          </div>
          <h3>499$ </h3>
        </div>
        <button type="button" class="btn btn-primary mt-4">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default SingleCard;
