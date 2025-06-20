import React from "react";
import storyImg from '../../../assets/story.png'
const Story = () => {
  return (
    <div className="container-fluid">
      <div className="container">
        <div className="row my-4">
          <div className="col-lg-6 col-12">
            <h2>Our Story</h2>
            <div style={{color: "#797979", fontSize: "17px"}}>
            <p>
             Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged
            </p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure.</p>
            <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College.</p>
            </div>
          </div>
          <div className="col-lg-6 col-12">
            <img src={storyImg} alt="clothes Img" className="img-fluid" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Story;
