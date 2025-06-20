import React from 'react';
import './Choose.css';
import choose1 from '../../../assets/choose/delivery.png';
import choose2 from '../../../assets/choose/money-bag.png';
import choose3 from '../../../assets/choose/support.png';
import SubHeading from '../../Sub-Heading/SubHeading';
const SectionTitle = () => {
  return (
    <div className="container">
    <SubHeading heading={'Why Choose Us'} />

      <div className="row justify-content-center">
        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <div className="choose-card border border-1 p-3">
            <img src={choose1} className="img-fluid" style={{ width: '65px' }} alt="" />
            <h4 className="my-3">Free Shipping</h4>
            <p>
              Our delivery car is fast, reliable, and always ready to bring your products safely to your doorstep.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <div className="choose-card border border-1 p-3">
            <img src={choose2} className="img-fluid" style={{ width: '65px' }} alt="" />
            <h4 className="my-3">100% Back Guarantee</h4>
            <p>
              Money isn't everything, but it's important. It gives us freedom, choices, and the power to support dreams.
            </p>
          </div>
        </div>

        <div className="col-lg-4 col-md-6 col-sm-12 p-2">
          <div className="choose-card border border-1 p-3">
            <img src={choose3} className="img-fluid" style={{ width: '65px' }} alt="" />
            <h4 className="my-3">Online Support 24/7</h4>
            <p>
              Our support team is here 24/7 to help you with orders, returns, or any questions you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTitle;
