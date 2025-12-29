import React from "react";
import { LiaLongArrowAltRightSolid } from "react-icons/lia";
import Rectangle1 from "../assets/Rectangle1.png";
import Rectangle2 from "../assets/Rectangle2.png";
import Rectangle3 from "../assets/Rectangle3.png";
import Rectangle4 from "../assets/Rectangle4.png";

const Experiences = () => {
  return ( 
      <div className="main_section my-30">
        <div className="flex flex-col gap-8">
          <div className="grid md:grid-cols-2 gap-8 items-center  justify-center text-center md:text-left md:items-start">
            <div className="flex items-center justify-center ">
              <img src={Rectangle1} alt="image" />
            </div>
            <div className="flex flex-col gap-4 items-center text-center md:text-left md:items-start justify-center">
              <h3 className="text-primary font-bold mt-4">Experiences</h3>
              <h2 className="md:text-4xl text-3xl font-bold ">
                we provide you the <br /> best experience
              </h2>
              <p>
                You don’t have to worry about the result because all of these
                interiors are made by people who are professionals in their
                fields with an elegant and lucurious style and with premium
                quality materials
              </p>
              <button className="flex items-center gap-2 text-primary cursor-pointer hover:underline ">
                More Info <LiaLongArrowAltRightSolid />
              </button>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="flex flex-col gap-4 justify-center items-center text-center md:text-left md:items-start">
              <h3 className="text-primary font-bold mt-4">Materials</h3>
              <h2 className="md:text-4xl text-3xl font-bold">
                Very serious materials for making furniture
              </h2>
              <p>
                Because panto was very serious about designing furniture for our
                environment, using a very expensive and famous capital but at a
                relatively low price
              </p>
              <button className="flex items-center gap-2 text-primary cursor-pointer hover:underline">
                More Info <LiaLongArrowAltRightSolid />
              </button>
            </div>
            <div className="flex gap-4 justify-center ">
              <div className="flex flex-col gap-4">
                <img src={Rectangle2} alt="image" />
                <img src={Rectangle3} alt="image" />
              </div>
              <div className="flex items-end">
                <img src={Rectangle4} alt="image" />
              </div>
            </div>
          </div>
        </div>
      </div> 
  );
};

export default Experiences;
