import React from "react";

import "./FirstComponent.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../secure.json";
import { motion } from "framer-motion";

function ThirdComponent() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <motion.div
      className="first-component"
      initial={{ width: 0 }}
      animate={{ width: "100%" }}
      exit={{ x: window.innerWidth, display: "none" }}
    >
      <div className="first-img">
        <Lottie options={defaultOptions} height={500} width={500} />
      </div>
      <div className="body-cont">
        <div className="bod">
          <div className="first-tit">
            <div className="first-tit-cont">Security</div>
          </div>

          <div className="first-body">
            <div className="first-body-cont">Two-Factor-Authentication:</div>
            <div className="first-body-cont">OTP authentication code</div>
            <div className="first-body-cont">and MSC security code.</div>
          </div>

          <div className="next">
            <div className="icon">
              <div className="circle-cont">
                {" "}
                <div className="circle"></div>
              </div>
              <div className="circle-cont">
                {" "}
                <div className="circle"></div>
              </div>
              <div className="circle-cont">
                {" "}
                <div className="page3nav"></div>
              </div>
            </div>{" "}
            <Link to="complete" className="to">
              Start{" "}
              <i style={{ fontWeight: "bold" }} class="fa fa-angle-right"></i>
            </Link>
            <main id="swup" className="transition-fade"></main>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default ThirdComponent;
