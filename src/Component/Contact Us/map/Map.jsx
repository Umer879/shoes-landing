import React from "react";
import SubHeading from "../../Sub-Heading/SubHeading";
const Map = () => {
  return (
    <div className="container-fluid">
      <div className="container">
       <SubHeading  heading={'Find Us Map'}/>
        <div className="map-cont border border-1 w-100 p-3">
        <div className="map w-100">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13291.954085887335!2d72.83649498839902!3d33.605602294776546!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38df99024717b629%3A0xc467d08f636c7444!2sFazaia%20Housing%20Scheme%2C%20Islamabad%2C%20Pakistan!5e0!3m2!1sen!2s!4v1750306721667!5m2!1sen!2s" allowfullscreen="" referrerpolicy="no-referrer-when-downgrade" className="border border-1" style={{height: '430px', width: '100%'}}></iframe>
        </div>
        </div>
        <SubHeading heading={'Why Choose Us'} />
      </div>
    </div>
  );
};

export default Map;
