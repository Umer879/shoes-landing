import React from 'react';
// Import your 10 logos here
import logo1 from '../../../assets/brands/01.png';
import logo2 from '../../../assets/brands/02.png';
import logo3 from '../../../assets/brands/03.png';
import logo4 from '../../../assets/brands/04.png';
import logo5 from '../../../assets/brands/05.png';
import logo6 from '../../../assets/brands/06.png';
import logo7 from '../../../assets/brands/07.png';
import logo8 from '../../../assets/brands/08.png';
import logo9 from '../../../assets/brands/09.png';
import logo10 from '../../../assets/brands/10.png';
import SubHeading from '../../Sub-Heading/SubHeading';
 // Optional styling
import './Brands.css'
const productLogos = [
  logo1, logo2, logo3, logo4, logo5,
  logo6, logo7, logo8, logo9, logo10,
];

const ProductGrid = () => {
  return (
    <div className="container my-5">
    <SubHeading heading={'Shop By Brands'} />
      <div className="row justify-content-center">
        {productLogos.map((logo, index) => (
          <div
            key={index}
            className="col-lg-2 col-md-3 col-sm-4 col-6 d-flex justify-content-center p-3"
          >
            <div className="product-logo-box border p-3 rounded shadow-sm" style={{cursor: 'pointer'}}>
              <img src={logo} alt={`Logo ${index + 1}`} className="img-fluid zoom" style={{ maxHeight: '60px' }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;

