import React from "react";
import "./Footer.css";
import footerImg from "../../assets/shoes2.png";
const Footer = () => {
  return (
    <>
      <div className="page-footer bg-black mt-3 w-100 h-100 container-fluid py-5">
        <div className="row d-flex column-gap-4">
          <div className="col-sm-4 col-12">
            <img src={footerImg} alt="" className=" img-fluid" />
          </div>
          <div className="col-sm-4 col-12">
            <h2>About Us</h2>
            <div className="line"></div>
            <p className="my-3">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit
              amet, consectetur adipisicing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip
              ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur
              adipisicing elit, sed do eiusmod tempor incididunt ut labore et
              dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo
              consequat.
            </p>
            <div className="social-media d-flex gap-4 fs-3 mb-4">
              <i class="fa-brands fa-facebook"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-whatsapp"></i>
            </div>
          </div>
          <div className="col-sm-3 col-12">
            <h2>Get in Touch</h2>
            <div className="line"></div>
            <ul
              className="list-group d-flex row-gap-2 mb-4 mx-2"
              style={{ listStyle: "none" }}
            >
              <li>
                <i class="fa-solid fa-user"></i> John Doe
              </li>
              <li>
                <i class="fa-solid fa-location-dot"></i> Lorem Ipsum, Pakistan
              </li>
              <li>
                <i class="fa-solid fa-envelope"></i> loremipsum@gmail.com
              </li>
              <li>
                <i class="fa-solid fa-globe"></i> www.loremipsum.com
              </li>
            </ul>
            <div className="useful-links">
              <h2>Useful links</h2>
              <div className="line"></div>
              <ul
                className="list-group d-flex row-gap-2 mb-4 mx-2"
                style={{ listStyle: "none", listStylePosition: "inside" }}
              >
                <li>About</li>
                <li>Product</li>
                <li>Contact</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="copyright d-flex align-items-center justify-content-center">
        <p>© 2023 All rights reserved</p>
      </div>
    </>
  );
};

export default Footer;
