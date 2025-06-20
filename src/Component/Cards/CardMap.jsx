import React from "react";
import card1 from "../../assets/Card-images/card1.png";
import card2 from "../../assets/Card-images/card2.png";
import card3 from "../../assets/Card-images/card3.png";
import card4 from "../../assets/Card-images/card4.png";
import SingleCard from "./SingleCard";
const CardMap = () => {
  const Card = [{ img: card1 }, { img: card2 }, { img: card3 }, { img: card4 }];
  return (
    <div className="card-container container ">
      <div className="row row-gap-5 d-flex justify-content-between">
        {Card.map((item, index) => (
          <div key={index} className="col-12 col-lg-5">
            <SingleCard  img={item.img} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardMap;
