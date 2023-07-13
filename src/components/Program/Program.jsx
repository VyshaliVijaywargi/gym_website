import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./program.css"

// import { Container } from "react-bootstrap";
const Program = () => {
  return (
   
    <div className="heading" id="program">
      <h1 className="program-header">Program</h1>
    
      <div className="Program-box">
        <div className="a-box">
          <div className="ratio ratio-1x1">
            <iframe
              src="https://www.youtube.com/embed/ewwxbpJecx4"
              title="YouTube video"
              allowFullScreen
            ></iframe>
          </div>
        </div>
        <div className="a-b-text">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.<br/>
            <button className="but">Learn more</button>
          </p>
         
        </div>
      </div>
      </div>
      
  );
};

export default Program;
