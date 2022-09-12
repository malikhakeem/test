import React from "react";

import "./FirstComponent.css";
import { Link } from "react-router-dom";
import Lottie from "react-lottie";
import animationData from "../office.json";
import { motion } from "framer-motion";

function FirstComponent() {
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
            <div className="first-tit-cont">Multi-channel</div>
            <div className="first-tit-cont">Payment</div>
          </div>

          <div className="first-body">
            <div className="first-body-cont">
              Allow you to pay online at all
            </div>
            <div className="first-body-cont">application and websites that</div>
            <div className="first-body-cont">accept MasterCard cards.</div>
          </div>

          <div className="next">
            <div className="icon">
              <div className="jo">
                {" "}
                <div className="page1nav"></div>
              </div>
              <div className="jo">
                {" "}
                <div className="bo"></div>
              </div>
              <div className="jo">
                {" "}
                <div className="bo"></div>
              </div>
            </div>{" "}
            <Link to="second" className="to">
              Next{" "}
              <i style={{ fontWeight: "bold" }} class="fa fa-angle-right"></i>
            </Link>
            <main id="swup" className="transition-fade"></main>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default FirstComponent;
