import React from "react";
import FirstComponent from "./FirstComponent";
import SecondComponent from "./SecondComponent";
import ThirdComponent from "./ThirdComponent";
import BottomCont from "./BottomCont";
import Complete from "../Complete";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
function AnimatedRoutes() {
  const location = useLocation();
  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<FirstComponent />} />
        <Route path="second" element={<SecondComponent />} />
        <Route path="/second/wax" element={<ThirdComponent />} />
        <Route path="btm" element={<BottomCont />} />
        <Route path="/second/wax/complete" element={<Complete />} />
      </Routes>
    </AnimatePresence>
  );
}

export default AnimatedRoutes;
