import React from "react";
import SingleProduct from "./SingleProduct";
import img1 from '../../assets/new collection/img1.png'
import img2 from '../../assets/new collection/img2.png'
import img3 from '../../assets/new collection/img3.png'
import img4 from '../../assets/new collection/img4.png'
import img5 from '../../assets/new collection/img5.png'
import img6 from '../../assets/new collection/img6.png'
import img7 from '../../assets/new collection/img7.png'
import img8 from '../../assets/new collection/img8.png'
import img9 from '../../assets/new collection/img9.png'
import img10 from '../../assets/new collection/img10.png'
import img11 from '../../assets/new collection/img11.png'
import img12 from '../../assets/new collection/img12.png'
const ProductMap = () => {
  const Product = [
    {
        img: img1,
        price: "50$"
    },
      {
        img: img2,
        price: "55$"
    },
      {
        img: img3,
        price: "40$"
    },
      {
        img: img4,
        price: "70$"
    },
      {
        img: img5,
        price: "90$"
    },
      {
        img: img6,
        price: "100$"
    },
      {
        img: img7,
        price: "75$"
    },
      {
        img: img8,
        price: "110$"
    },
      {
        img: img9,
        price: "35$"
    },
      {
        img: img10,
        price: "59$"
    },
      {
        img: img11,
        price: "135$"
    },
      {
        img: img12,
        price: "110$"
    },
  ];
  return (
    <div className="product-container container">
  <div className="row row-gap-4">
  {Product.map((item, index) => (
    <div
      key={index}
      className="col-12 col-md-6 col-lg-4 d-flex justify-content-center"
    >
      <SingleProduct img={item.img} price={item.price} />
    </div>
  ))}
</div>

</div>

  )
};

export default ProductMap;
